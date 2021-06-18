/**请求集合 */
import request from "../utils/request";
const query_userinfo = (data) =>
  request({
    url: "/api/userinfo",
    method: "POST",
    param: data,
  });
