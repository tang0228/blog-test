import { getSetting } from "@/api/setting";
import { titleControl } from "@/utils";
export default {
    namespaced: true,
    state: {
        data: null,
    },
    mutations: {
        setData(state, payload) {
            state.data = payload;
        }
    },
    actions: {
        async fetchSetting(ctx) {
            const resp = await getSetting();
            ctx.commit("setData", resp);
            if(resp.favicon) {
                let link = document.querySelector("link[rel='shortcut icon']");
                if(link) {
                    return;
                }
                link = document.createElement("link");
                link.rel = "shortcut icon";
                link.type= "images/x-iocn";
                link.href = resp.favicon;
                document.head.appendChild(link);
            }
            // 设置侧边栏标题
            if(resp.siteTitle) {
                titleControl.setNameTitle(resp.siteTitle);
            }
        }
    }
}