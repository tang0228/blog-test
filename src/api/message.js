import request from "./request";


// 提交留言
export async function postMessage(options) {
    return await request.post("/api/message", options);
}

// 分页获取留言
export async function getMessages(page = 1, limit = 10) {
    return await request.get("/api/message", {
        params: {
            page,
            limit
        }
    })
}