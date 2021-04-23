import request from "./request";

// 获取博客分类
export async function getBlogTypes() {
    return await request.get("/api/blogtype");
}


// 获取所有博客
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
    return await request.get("/api/blog",{
        params: {
            page,
            limit,
            categoryid
        }
    })
}


// 获取单个博客信息
export async function getBlog(id) {
    return await request.get(`/api/blog/${id}`);

}

// 提交评论
export async function postComment(options) {
    return await request.post("/api/comment", options);

}

// 分页获取评论
export async function getComments(blogId, page = 1, limit = 10) {
    return await request.get("/api/comment", {
        params: {
            blogId,
            page,
            limit
        }
    })

}