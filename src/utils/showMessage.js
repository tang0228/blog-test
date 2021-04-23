import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon";
import styles from "./message.module.less";


export default function showMessage(options = {}) {
    const content = options.content || "";
    const type = options.type || "info";
    const duration = options.duration || 2000;
    const container = options.container || document.body;
    // 生成div
    const div = document.createElement("div");
    // 获取Icon组件的dom元素
    const iconDom = getComponentRootDom(Icon, {
        type
    });
    const typeClass = `${styles["message-" + type]}`;
    div.className = `${styles.message} ${typeClass}`;

    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;

    // 如果容器的定位是静态的
    if (options.container) {
        if (getComputedStyle(container).position === "static") {
            container.style.position = "relative";
        }
    }

    container.appendChild(div);
    // 让浏览器强行渲染，reflow
    div.clientHeight;
    // 回到原来位置
    div.style.opacity = 1;
    div.style.transform = `translate(-50%, -50%)`;

    // 过一段时间消失
    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = "translate(-50%, -50%) translateY(-25px)";
        // 动画结束后移出dom，且该事件只发生一次
        div.addEventListener("transitionend", () => {
            div.remove();
            // 回调函数
            options.callback && options.callback();
        }, { once: true })
    }, duration)
}
