let routerTitle = "";
let nameTitle = "";

function setTitle() {
    if(!routerTitle && !nameTitle) {
        document.title = "loading";
    }else if(!routerTitle && nameTitle) {
        document.title = nameTitle;
    }else if(routerTitle && !nameTitle) {
        document.title = routerTitle;
    }else {
        document.title = routerTitle + "-" + nameTitle;
    }
}

export default {
    setRouterTitle(title) {
        routerTitle = title;
        setTitle();
    },
    setNameTitle(title) {
        nameTitle = title;
        setTitle();
    }
}