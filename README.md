# m-base

移动应用样式和脚本的base层库文件

## 安装

```
  npm i m-base --save
```

## 说明

```index.less``` 作为样式基础层对外暴露的入口, 业务项目的底层less引用他即可

```js/``` 目录提供了一些工具脚本，按需引用即可

base/下的：   

- normalize.less normalize.css库，__强烈建议过一遍内容__，有些工具功能可以直接使用
- variables.less 变量定义,项目less中可直接使用
- mixins.less    一些基础mixins函数
- base.less      基础层样式，可扩展优化
