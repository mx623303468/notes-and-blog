# webpack 相关面试题

## 与 Webpack 类似的工具有哪些，为什么选择使用 Webpack?

产品成熟，社区生态好，有更多的最佳实践来参考。

遇到问题能快速找到解决方案。

有强大的插件系统，能灵活的满足不同的场景需求。

## Webpack 与 Grunt Gulp 这类打包工具有什么不同？

Grunt Gulp 这类构建工具的思路是，`遍历源文件` -> `匹配规则` -> `打包输出`，这个过程中做不到按需加载，对打包出来的资源，页面是否使用，打包过程是不关心的。

Webpack 是从入口文件开始，经过模块，依赖加载，分析和打包完成的项目构建。在这个过程中，依靠强大的插件系统，可以针对性的做一些解决方案。

## 什么是 NPM Script， NPM Script 可以用来做什么？

`NPM Script` 是 `NPM` 里的执行脚本功能，`Node` 的开发是离不开 `NPM` 的，而`NPM Script` 是 `NPM` 最常用、强大的功能之一。

`NPM` 允许在 `package.json` 文件中使用 `scripts` 字段定义脚本命令。

```json
{
  "name": "npm-script",
  "version": "0.1.0",
  "scripts": {
    "build": "webpack"
  }
  // ...
}
```

上面的代码是 `package.json` 文件的一个片段，里面的 `scripts` 字段是一个对象，它的每一个属性，对应的就是一个脚本命令。比如上面的 `build` 命令，对应的脚本就是 `webpack` 。

命令行下使用 `npm run` 命令。就可以执行定义的脚本了。

`npm run build` 等同于 `webpack`

## NPM 的常用命令有哪些？

- `npm init` 初始化 NPM 环境，创建一个 `package.json` 文件
- `npm install <packageName>` 安装 npm 包，可以指定包名安装某个具体的 npm 包。 通过 `--save-dev` 安装到 `devDependencies` 或者``--save`安装到`Dependencies`
- `npm update` 更新 `NPM`包
- `npm set` 设置 npm 配置
- `npm config` 查看 npm 的配置信息
- `npm list`展现当前项目安装的所有模块，以及对应的依赖
- `npm search` 查找 npm 仓库
- `npm info` 查看某个包的信息

[NPM 命令官网文档](https://docs.npmjs.com/cli-documentation/)

## Webpack-cli 常用选项

- `--config` 指定配置文件路径
- `--mode` 指定打包环境，可选值为 `development / production` 分别对应 **开发环境** 与 **生产环境**
- `--json` 输出详细的打包结果，可以使用 `webpack --json > stats.json` 的方式将打包结果输出到指定的文件，用来分析打包结果。
- `--progress` 显示打包进度条
- `--color`,`--colors`,`--no-color`,`--no-colors` 控制控制台输出的内容是否开启颜色
- `--display-error-details` 打印详细的错误信息
- `--watch` 监听文件变化，没有变化的模块会在编译后，缓存到内存，每次只编译有变化的部分。
- `--profile` 详细的输出每个环节的打包耗时，方便排查打包速度的瓶颈
- `--hot` 开启 `Hot Module Replacement` (模块热更替)
- [官方文档](https://webpack.js.org/api/cli/)

## Webpack 的配置有几种写法，分别可以应用到什么场景？

webpack 的配置文件可以通过创建一个 `webpack.config.js` 文件来使用，也可以通过 webpack-cli 命令行参数 `--config xxx.js` 来指定某个文件。

### 最基础的写法

遵循 `CommonJS` 的规范，通过 `module.exports` 导出一个 Node.js 的模块。

```js
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  }
}
```

### 函数型的配置

如果只使用一个配置文件来区分生产环境和开发环境时，就可以使用函数型的配置文件，函数必须返回一个配置对象。接受两个参数 `env` 和 `argv`，
分别对应 **环境对象** 和 **webpack-cli 命令行选项参数**

```js
module.exports = (env, argv) => {
  return {
    mode: env.production ? 'production' : 'development',
    devtool: env.production ? 'source-maps' : 'eval',
    entry: 'app.js',
    output: { //... },
    plugins: [
      new TerserPlugin({
        terserOptions: {
            compress: argv['optimize-minimize'] // 只有传入 -p 或 --optimize-minimize
        }
      })
    ]
  }
}
```

### Promise 类型的配置文件

如果需要异步加载一些变量作为配置，那么可以使用 Promise 的方式来做。

```js
module.exports = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        mode: 'development',
        entry: 'app.js'
        /* ... */
      })
    }, 5000)
  })
}
```

### 多配置数组

在一些特定场景，需要一次命令，打包多次，这时候就可以使用配置数组的方式，将两次以上的配置以数组的形式导出

```js
module.exports = [
  {
    mode: 'production'
    // 配置1
  },
  {
    mode: 'development'
    // 配置2
  }
]
```

## 如果要开发一个 `JQuery` 插件、`Vue` 组件等，需要怎么配置 Webpack ？

## Webpack 的占位符 `[hash]` 、`[chunkhash]` 、 `[contenthash]` 有什么区别和联系？ 最佳实践是什么？

这几个占位符都会在打包后生产 hash 值。 都可以通过 `[xxx:length]`(默认 20) 的语法来指定长度。可以与其他占位符结合使用。例如： `[name].[hash:8].js`

- `[hash]` 是整个项目的 hash 值，根据每次编译的内容计算得到的，每次编译后都会生产新的 hash 值，所以修改项目内的任何文件都会导致所有文件的 hash 值发生变化；
  在一个项目中入口不同，但是生产的 hash 是相同的，所以 hash 无法实现前端静态资源在浏览器上长缓存，而应该使用 `chunkhash`

- `[chunkhash]` 是根据入口文件(entry)进行依赖解析，构建对应的 chunk，生成相应的 hash； 只要组成 entry 的模块没有改变，则对应的 hash 也是不变的，所以一般项目优化时，会将公共库代码拆分到一起，因为公共库代码变动较少，使用 `chunkhash` 可以发挥最长缓存的作用；

- `[contenthash]` 在使用 chunkhash 会存在一个问题，当一个 JS 文件中引入了 CSS 文件， 编译后它们的 hash 是相同的。只要 JS 文件内容发生变化，再次编译后，hash 就会发生变化。而与之关联的，没有任何改变 CSS 文件的 hash 也会发生改变。针对这种情况，可以把 CSS 从 JS 中使用 `mini-css-extract-plugin` 或者 `extract-text-webpack-plugin` 抽离出来并使用 contenthash

## Webpack 的 SourceMap 有几种形式？ 分别有什么特点？ SourceMap 配置的最佳实践是什么？

## 什么是 bundle ，什么是 chunk 什么是 module ？
