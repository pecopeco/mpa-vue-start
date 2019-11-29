# vue-start

> vue PC端多页应用模板，基于 pug、stylus、fly、element-ui、vuex、vue-router 搭建，使用 prerender-spa-plugin 预渲染优化seo

### 安装
```
npm i
```

### 运行
```
npm start
```

### 打包

测试环境：
```
npm run build:test
```

生产环境：
```
npm run build
```

### 部署


部署到测试环境：
```
npm run prod:test
```

部署到生产环境：
```
npm run prod
```

部署服务器配置 prod.js：
```
...
let server = {
  default: {  // 正式环境
    host: "0.0.0.0",  // 服务器IP地址
    username: "root",  // 账号
    password: "123456",  // 密码
    path: "/www/project"  // 服务器项目路径
  },
  test: {},    // 测试环境
}
...
```
