
import "nprogress/nprogress.css";
import {start, done, configure} from "nprogress/nprogress";
import NotFound from "@/components/NotFound";
configure({
    trickleSpeed: 30,
    showSpinner: false
})
function delay(duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, duration);
    });
}

function getPageComponent(getComponent) {
    return async () => {
        start();
        if(process.env.NODE_ENV === "development") {
            await delay(1000);
        }

        const comp = await getComponent();
        done();
        return comp;
    }
}
export default [
    {
        name: "Home",
        path: "/", 
        component: getPageComponent(() => import(/*webpackChunkName: "home" */"@/pages/Home")),
        meta: {
            title: "首页"
        }
    },
    {
        name: "Blog", 
        path: "/blog", 
        component: getPageComponent(() => import(/*webpackChunkName: "blog" */"@/pages/Blog")), 
        meta: {
            title: "文章"
        }
    },
    {
        name: "CategoryBlog", 
        path: "/blog/cate/:categoryId", 
        component: getPageComponent(() => import(/*webpackChunkName: "blogCate" */"@/pages/Blog")), 
        meta: {
            title: "文章"
        }
    },
    {
        name: "Detail", 
        path: "/blog/:id", 
        component: getPageComponent(() => import(/*webpackChunkName: "blogDetail" */"@/pages/Blog/Detail")), 
        meta: {
            title: "文章详情"
        }
    },
    {
        name: "About", 
        path: "/about", 
        component: getPageComponent(() => import(/*webpackChunkName: "about" */"@/pages/About")), 
        meta: {
            title: "关于我"
        }
    },
    {
        name: "Project", 
        path: "/project", 
        component: getPageComponent(() => import(/*webpackChunkName: "project" */"@/pages/Project")), 
        meta: {
            title: "项目&效果"
        }
    },
    {
        name: "Message", 
        path: "/message", 
        component: getPageComponent(() => import(/*webpackChunkName: "message" */"@/pages/Message")), 
        meta: {
            title: "留言板"
        }
    },
    {
        name: "NotFound",
        path: "*",
        component: NotFound
    }
]