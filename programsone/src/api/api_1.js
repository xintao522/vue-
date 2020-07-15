/**
* api接口统一管理
*/
import { post } from "@/util/http";

let baseURL = "/video";

export const Login = data => post(`${baseURL}/Login`, data);
