# jest中使用es6

* 安装`@babel/plugin-transform-modules-commonjs`
* 新建`.babelrc`，配置如下

```
{
  "env": {
    "test": {
      "plugins": ["@babel/plugin-transform-modules-commonjs"]
    }
  }
}
```