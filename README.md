## 启动
```
npm install

node app.js

热加载 >>>
安装supervisor： npm install -g supervisor
supervisor app.js
```

## 源码目录介绍
```
├── app                        // 主项目目录
│   ├── controllrts            // 控制器目录
│   │   └── ...                // 各个表对应的控制器
│   ├── middleware             // 中间件目录
│   │   └── resFormat.js       // 格式化返回值（我目前没用） 
│   ├── models                 // 表目录
│   │   ├── example.js         // 举例用的表（请忽略）
│   └── utils                  // 工具库
│   │   ├── formatDate.js      // 时间格式化
│   │   └── passport.js        // 用户密码加密和验证工具
├── db-daike                   // 数据库导出的 json 文件（没地方放就放这了）
├── routes                     // 路由目录
│   └── api                    // 接口目录
│   │   ├── example_router.js  // 举例用的接口
├── app.js                     // 项目入口
└── config.js                  // 基础配置信息
```

## 使用的库
```
{
  "dependencies": {
    // 加密用户密码（数据库没有存明文密码）
    "bcrypt": "^3.0.0",   
    // 解析前段请求参数     
    "koa-bodyparser": "^4.2.1",
    // 路由
    "koa-router": "^7.4.0",
    // 解决跨域
    "koa2-cors": "^2.0.6",
    // 操作 mongoDB 数据库
    "mongoose": "^5.2.7",
    //定时任务
    "node-schedule": "^1.3.2",
    //发送http请求
    "request": "^2.88.0",
    // 生成唯一 id
    "uuid": "^3.3.2"
  }
}

```
