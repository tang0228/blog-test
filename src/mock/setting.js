import Mock from "mockjs";

Mock.mock("/api/setting", "get", {
    code: 0,
    msg: "",
    data: {
        avatar: "https://i.loli.net/2021/04/03/ADMoTQImGFx7Zpa.jpg",
        siteTitle: "阿汤的个人空间",
        github: "https://github.com/DuYi-Edu",
        qq: "2903474904",
        qqQrCode: "https://i.loli.net/2021/03/29/7qVGhX5YAIEuP9a.png",
        weixin: "T14797857310",
        weixinQrCode: "https://i.loli.net/2021/03/29/BJWdZtDKRSpwLOr.jpg",
        mail: "2903474904@qq.com",
        icp: "黑ICP备17001719号",
        githubName: "Tyq-Home",
        favicon: "https://i.loli.net/2021/04/03/ADMoTQImGFx7Zpa.jpg",
    }
})