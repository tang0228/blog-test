import axios from "axios";
import { showMessage } from "../utils";

const ins = axios.create(); // 创建一个axios实例

ins.interceptors.response.use(resp=>{
    if(resp.data.code != 0) {
        showMessage({
            content: resp.data.msg,
            type: "error"
        });
        return null;
    }
    return resp.data.data;
})

export default ins;