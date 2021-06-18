# taro

taro+taro ui 模板

## 文件目录

```
|-- config # 配置文件。
|-- dist # 运行包文件
|-- src # 工程内核包，封装了基础组件、系统内置功能(如用户管理)、组件注册、表单生成、页面渲染、通用 util 等
|   |-- page # 页面组件。
|   |-- store # 公共数据。
```

### 项目运行

1. $ npm install -g @tarojs/cli

OR

```
  $ yarn global add @tarojs/cli
```

2. $ yarn install

   ```
   如果出现sass安装失败，请查看官方文档安装解决
   ```

3. $ yarn dev:weapp 运行微信小程序端

### 注意事项

1. 微信小程序的调试库需要降低至 2.14.4；

2. taro 和 taro-ui 兼容性不好，当出现某些文件引入错误时，需要改 $ yarn add taro-ui 为 $ yarn add taro-ui@next
