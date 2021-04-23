

import defaullSrc from "@/assets/default.svg"
import eventBus from "../eventBus";
import {debounce} from "@/utils"

// 图片容器
let imgs = [];

function setImg(img) {
    img.dom.src = defaullSrc;  // 先让所有图片都是默认图片
    const rect = img.dom.getBoundingClientRect(); // 获取图片的位置信息
    const imgHeight = rect.height || 150; // 图片的高度，没有则是150
    const clinetHeight = window.innerHeight; // 视口的高度
    if(rect.top > -imgHeight && rect.top < clinetHeight) {
        // 图片出现在可视区
        img.dom.src = img.src;
        imgs = imgs.filter(i => i !== img);
    }

}

function setImgs() {
    for (const i of imgs) {
        setImg(i);
    }
}
function handleSroll() {
    setImgs();
}

// 监听滚轮事件
eventBus.$on("mainScroll", debounce(handleSroll, 50))


export default {
    inserted(el, binding) {
        const img = {
            src: binding.value,
            dom: el
        };
        imgs.push(img);
        setImg(img);
    },
    unbind(el) {
        imgs = imgs.filter(it => it.dom !== el);
    }
}