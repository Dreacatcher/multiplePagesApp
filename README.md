
### 贵阳前端新框架（gyNewPC）  
>author:  陆朝明    
>contact:   18301886139  
>qq:  1026440087  

### 前言  
本项目是基于vue2.0+webpack2+elementUi的多页面开发

### 2.0的主要功能  

 1. 全局统一使用的模块  
 2. 支持字体图标，sass,less，支持css预处理、热加载  
 3. 构建时，增加对css打包的支持  
 4. 提取公共模块  
 5. 多页面可使用vue-router2路由  
 6. 可自定义页面模块名  
 7. 模块下静态文件可直接调用  
 8. 发送ajax请求，使用`axios`库  
 

## Build Setup  

``` bash  
# 安装依赖
npm install  

# 调试环境 serve with hot reload at localhost:8086
npm run dev  

# 生产环境 build for production with minification
npm run build  

```

### 目录结构
``` 
├───webpack  
├───build  
├───src  
|   │   └─assets    #公用的静态资源
|   │   └─style    #公用样式库
├───components 公用组件库
|   │   └─Head.vue  head组件
├───views    #各个页面模块，模块名可以自定义哦！
│   │   └─index    #一级目录
│   │   └─index.html
│   │   └─index.js
│   │   └─indexVue.vue
├───router    #路由
├───store    store状态管理/数据的唯一出口
├───tools    #公用封装的js库
├───test    #测试
├───static  #存放静态页面直接访问的资源
    └─icomoon/    #字体图标
```

#### 注：

>例如 http:// localhost:8086/`views`/home/index.html，
>`views`就是我们线上的模块名，如需修改请到项目目录文件config/index.js修改`moduleName`参数，修改这里的配置的同时，也要同时重命名`/src/views`的这个文件夹名称，是否会报错的。

