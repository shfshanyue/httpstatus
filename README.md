# HTTP STATUS

[HTTP.DEVTOOL.TECH](https://http.devtool.tech) 可通过路径名称直接访问到对应的状态码。如：

+ <https://http.devtool.tech/200>：关于 200 状态码的解释说明
+ <https://http.devtool.tech/201>：关于 201 状态码的解释说明
+ <https://http.devtool.tech/404>：关于 404 状态码的解释说明

本网站内容参考以下网站

+ [rmaake1/httpstatuses](https://github.com/rmaake1/httpstatuses)，间接来自于 RFC
+ [http.cat](https://http.cat/)
+ [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

## 工具推荐

+ [Apifox: API 文档、API 调试、API Mock、API 自动化测试](https://www.apifox.cn/?utm_source=shanyue-question)
+ [API Hub](https://www.apifox.cn/apihub/)
+ [Apifox Echo](https://echo.apifox.com)

## 代码示例

+ [图片上传](https://http.devtool.tech/demo/upload)

## API

除了状态码，本站还提供了 API 用于 HTTP 测试。

### Cookie

获取所有 Cookie，配置 Cookie，并支持配置属性如 Domain、Path、SameSite、MaxAge 等。

``` bash
# 获取 Cookies
$ curl https://http.devtool.tech/api/cookies

# 配置 Cookie 为 a: 3
$ curl https://http.devtool.tech/api/cookies/set/a/3

# 配置 Cookie 为 a: 3，且 httpOnly: true, secure: true, maxAge: 100, sameSite: Lax
$ curl https://http.devtool.tech/api/cookies/set/a/3?secure=true&httpOnly=true&maxAge=100&sameSite=Lax
```

### 缓存

配置服务器端的 `Cache Control` 以及 `Age` 属性，用以测试缓存。

> 目前部署在 Vercel 中，Age 会被 Proxy 所拦截。

``` bash
# 配置 Cache-Control
$ curl https://http.devtool.tech/api/cache?cacheControl=no-store&age=1000

# 配置 Cache-Control: 100
$ curl https://http.devtool.tech/api/cache/100

# 配置 Cache-Control: 31536000
$ curl https://http.devtool.tech/api/cache/31536000
```
