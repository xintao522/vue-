/**
* api接口统一管理
*/
import { post } from "@/util/http";

let baseURL = "/video";

const DemoApi2 = data => post(`${baseURL}/DemoApi2`, data);

export default {
    DemoApi2
}
