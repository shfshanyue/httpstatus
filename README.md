# Next App for SEO

本模板使用 `typescript` 和 `tailwind` 开发 Next 应用，支持 `google analysis`，`SEO` 等，可快速部署在 `vercel`，`tencent serverless` 及 `docker` 上。

## 功能

+ `typescript`
+ `tailwind`
+ `classNames`
+ `google analysis`
+ `auto sitemap`
+ `google tag manger`
+ `bundle analysis`
+ `inline assets`
+ `helmet + SEO`
+ `vercel`
+ `serverless component`
+ `docker`
+ `traefik`

## 快速使用

使用本模板快速创建应用

``` bash
$ git clone git@github.com:shfshanyue/next-app.git
```

在项目创建早期尽可能对 package 进行升级，这里使用了 `npm-check-updates`

``` bash
$ npm run ncu
```

在测试环境中进行开发

``` bash
$ npm run dev
```

### 文件结构

``` bash
.
├── node_modules/
├── pages/                  # 所有的 pages
├── utils/
├── package.json
├── package-lock.json
├── README.md
└── serverless.yaml
```

## Deoploy

### Tencent Serverless Framework

Live Demo: <https://service-3btidaow-1257314149.gz.apigw.tencentcs.com/>

``` bash
$ npm run build

$ sls --debug
```

### Docker and Traefik

Live Demo: <https://next-app.shanyue.tech/>

``` bash
$ docker-compose up -d
```

### Vercel

Live Demo: <https://next-app-shanyue.vercel.app/>

``` bash
$ vercel
```
