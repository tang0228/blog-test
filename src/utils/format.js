export default function format(time, showTime = false) {
    const t = new Date(+time);
    const y = t.getFullYear();
    const m = (t.getMonth() + 1) < 10 ? "0" + (t.getMonth() + 1) : (t.getMonth() + 1);
    const d = t.getDate() < 10 ? "0" + t.getDate() : t.getDate();
    let str =  y + "-" + m + "-" + d;
    if(showTime) {
        // 如果需要加上时分秒
        const h = t.getHours() < 10 ? "0" + t.getHours() : t.getHours();
        const m = t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes();
        const s = t.getSeconds() < 10 ? "0" + t.getSeconds() : t.getSeconds();
        str += ` ${h}:${m}:${s}`;
    }
    return str;
}