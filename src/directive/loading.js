
import loadingSvg from "@/assets/loading.svg";
import styles from "./loading.module.less";
// 获取图片
function getImg(el) {
    return el.querySelector("img[data-name=loading]");
}

// 创建元素
function createImg() {
    const img = new Image();
    img.src = loadingSvg;
    img.className = styles.loading;
    img.dataset.name = "loading";
    return img;
}


export default function (el, binding) {
    // 根据binding.value判断是否创建删除img
    const imgUrl = getImg(el);
    if(binding.value && !imgUrl) {
        // 没有加载完，并且没有图片
        const img = createImg();
        el.appendChild(img);
    }else if(!binding.value && imgUrl){
        // 加载完，并且有图片
        imgUrl.remove();
    }
   
}