/**
 * 封装请求(上传和下载未考虑),主要考虑部分接口请求时间较长，用户误以为没有操作响应
 */
import Taro from "@tarojs/taro";
const baseUrl = "";
const request = (options) => {
  const { url, method, param, showLoad = false, other } = options;
  if (showLoad) {
    Taro.showLoading({
      title: "请稍等...",
      mask: true,
    });
  }
  return new Promise((resolve, reject) => {
    Taro.request({
      url: getUrl(url),
      data: param,
      method,
      ...other,
      success: (res) => {
        if (showLoad) Taro.hideLoading();
        if (res.succ) {
          resolve(res.data);
        } else {
          Taro.showToast({
            title: res.errMsg || "接口响应失败！",
            icon: "none",
            duration: 2500,
          });
        }
      },
      fail: (err) => {
        if (showLoad) Taro.hideLoading();
        Taro.showModal({
          content: "请求失败！",
          showCancel: false,
        });
      },
    });
  });
};
//判断传递过来的请求路径是否是完整的url地址
const getUrl = (url) => {
  if (!url.includes("://")) {
    url = baseUrl + url;
  }
  return url;
};
export default request;
