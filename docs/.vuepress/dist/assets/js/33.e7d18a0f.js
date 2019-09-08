(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{208:function(t,a,e){"use strict";e.r(a);var s=e(2),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"webpack-相关面试题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-相关面试题","aria-hidden":"true"}},[t._v("#")]),t._v(" webpack 相关面试题")]),t._v(" "),e("h2",{attrs:{id:"与-webpack-类似的工具有哪些，为什么选择使用-webpack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#与-webpack-类似的工具有哪些，为什么选择使用-webpack","aria-hidden":"true"}},[t._v("#")]),t._v(" 与 Webpack 类似的工具有哪些，为什么选择使用 Webpack?")]),t._v(" "),e("p",[t._v("产品成熟，社区生态好，有更多的最佳实践来参考。")]),t._v(" "),e("p",[t._v("遇到问题能快速找到解决方案。")]),t._v(" "),e("p",[t._v("有强大的插件系统，能灵活的满足不同的场景需求。")]),t._v(" "),e("h2",{attrs:{id:"webpack-与-grunt-gulp-这类打包工具有什么不同？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-与-grunt-gulp-这类打包工具有什么不同？","aria-hidden":"true"}},[t._v("#")]),t._v(" Webpack 与 Grunt Gulp 这类打包工具有什么不同？")]),t._v(" "),e("p",[t._v("Grunt Gulp 这类构建工具的思路是，"),e("code",[t._v("遍历源文件")]),t._v(" -> "),e("code",[t._v("匹配规则")]),t._v(" -> "),e("code",[t._v("打包输出")]),t._v("，这个过程中做不到按需加载，对打包出来的资源，页面是否使用，打包过程是不关心的。")]),t._v(" "),e("p",[t._v("Webpack 是从入口文件开始，经过模块，依赖加载，分析和打包完成的项目构建。在这个过程中，依靠强大的插件系统，可以针对性的做一些解决方案。")]),t._v(" "),e("h2",{attrs:{id:"什么是-npm-script，-npm-script-可以用来做什么？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是-npm-script，-npm-script-可以用来做什么？","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是 NPM Script， NPM Script 可以用来做什么？")]),t._v(" "),e("p",[e("code",[t._v("NPM Script")]),t._v(" 是 "),e("code",[t._v("NPM")]),t._v(" 里的执行脚本功能，"),e("code",[t._v("Node")]),t._v(" 的开发是离不开 "),e("code",[t._v("NPM")]),t._v(" 的，而"),e("code",[t._v("NPM Script")]),t._v(" 是 "),e("code",[t._v("NPM")]),t._v(" 最常用、强大的功能之一。")]),t._v(" "),e("p",[e("code",[t._v("NPM")]),t._v(" 允许在 "),e("code",[t._v("package.json")]),t._v(" 文件中使用 "),e("code",[t._v("scripts")]),t._v(" 字段定义脚本命令。")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm-script"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.1.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("上面的代码是 "),e("code",[t._v("package.json")]),t._v(" 文件的一个片段，里面的 "),e("code",[t._v("scripts")]),t._v(" 字段是一个对象，它的每一个属性，对应的就是一个脚本命令。比如上面的 "),e("code",[t._v("build")]),t._v(" 命令，对应的脚本就是 "),e("code",[t._v("webpack")]),t._v(" 。")]),t._v(" "),e("p",[t._v("命令行下使用 "),e("code",[t._v("npm run")]),t._v(" 命令。就可以执行定义的脚本了。")]),t._v(" "),e("p",[e("code",[t._v("npm run build")]),t._v(" 等同于 "),e("code",[t._v("webpack")])]),t._v(" "),e("h2",{attrs:{id:"npm-的常用命令有哪些？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm-的常用命令有哪些？","aria-hidden":"true"}},[t._v("#")]),t._v(" NPM 的常用命令有哪些？")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("npm init")]),t._v(" 初始化 NPM 环境，创建一个 "),e("code",[t._v("package.json")]),t._v(" 文件")]),t._v(" "),e("li",[e("code",[t._v("npm install <packageName>")]),t._v(" 安装 npm 包，可以指定包名安装某个具体的 npm 包。 通过 "),e("code",[t._v("--save-dev")]),t._v(" 安装到 "),e("code",[t._v("devDependencies")]),t._v(" 或者``--save"),e("code",[t._v("安装到")]),t._v("Dependencies`")]),t._v(" "),e("li",[e("code",[t._v("npm update")]),t._v(" 更新 "),e("code",[t._v("NPM")]),t._v("包")]),t._v(" "),e("li",[e("code",[t._v("npm set")]),t._v(" 设置 npm 配置")]),t._v(" "),e("li",[e("code",[t._v("npm config")]),t._v(" 查看 npm 的配置信息")]),t._v(" "),e("li",[e("code",[t._v("npm list")]),t._v("展现当前项目安装的所有模块，以及对应的依赖")]),t._v(" "),e("li",[e("code",[t._v("npm search")]),t._v(" 查找 npm 仓库")]),t._v(" "),e("li",[e("code",[t._v("npm info")]),t._v(" 查看某个包的信息")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://docs.npmjs.com/cli-documentation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NPM 命令官网文档"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"webpack-cli-常用选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-cli-常用选项","aria-hidden":"true"}},[t._v("#")]),t._v(" Webpack-cli 常用选项")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("--config")]),t._v(" 指定配置文件路径")]),t._v(" "),e("li",[e("code",[t._v("--mode")]),t._v(" 指定打包环境，可选值为 "),e("code",[t._v("development / production")]),t._v(" 分别对应 "),e("strong",[t._v("开发环境")]),t._v(" 与 "),e("strong",[t._v("生产环境")])]),t._v(" "),e("li",[e("code",[t._v("--json")]),t._v(" 输出详细的打包结果，可以使用 "),e("code",[t._v("webpack --json > stats.json")]),t._v(" 的方式将打包结果输出到指定的文件，用来分析打包结果。")]),t._v(" "),e("li",[e("code",[t._v("--progress")]),t._v(" 显示打包进度条")]),t._v(" "),e("li",[e("code",[t._v("--color")]),t._v(","),e("code",[t._v("--colors")]),t._v(","),e("code",[t._v("--no-color")]),t._v(","),e("code",[t._v("--no-colors")]),t._v(" 控制控制台输出的内容是否开启颜色")]),t._v(" "),e("li",[e("code",[t._v("--display-error-details")]),t._v(" 打印详细的错误信息")]),t._v(" "),e("li",[e("code",[t._v("--watch")]),t._v(" 监听文件变化，没有变化的模块会在编译后，缓存到内存，每次只编译有变化的部分。")]),t._v(" "),e("li",[e("code",[t._v("--profile")]),t._v(" 详细的输出每个环节的打包耗时，方便排查打包速度的瓶颈")]),t._v(" "),e("li",[e("code",[t._v("--hot")]),t._v(" 开启 "),e("code",[t._v("Hot Module Replacement")]),t._v(" (模块热更替)")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://webpack.js.org/api/cli/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"webpack-的配置有几种写法，分别可以应用到什么场景？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-的配置有几种写法，分别可以应用到什么场景？","aria-hidden":"true"}},[t._v("#")]),t._v(" Webpack 的配置有几种写法，分别可以应用到什么场景？")]),t._v(" "),e("p",[t._v("webpack 的配置文件可以通过创建一个 "),e("code",[t._v("webpack.config.js")]),t._v(" 文件来使用，也可以通过 webpack-cli 命令行参数 "),e("code",[t._v("--config xxx.js")]),t._v(" 来指定某个文件。")]),t._v(" "),e("h3",{attrs:{id:"最基础的写法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最基础的写法","aria-hidden":"true"}},[t._v("#")]),t._v(" 最基础的写法")]),t._v(" "),e("p",[t._v("遵循 "),e("code",[t._v("CommonJS")]),t._v(" 的规范，通过 "),e("code",[t._v("module.exports")]),t._v(" 导出一个 Node.js 的模块。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  mode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'development'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  entry"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./app.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  output"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    filename"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[name].bundle.js'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"函数型的配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#函数型的配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 函数型的配置")]),t._v(" "),e("p",[t._v("如果只使用一个配置文件来区分生产环境和开发环境时，就可以使用函数型的配置文件，函数必须返回一个配置对象。接受两个参数 "),e("code",[t._v("env")]),t._v(" 和 "),e("code",[t._v("argv")]),t._v("，\n分别对应 "),e("strong",[t._v("环境对象")]),t._v(" 和 "),e("strong",[t._v("webpack-cli 命令行选项参数")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" argv")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("production "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'development'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    devtool"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("production "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'source-maps'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eval'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    entry"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    output"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//... },")]),t._v("\n    plugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TerserPlugin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        terserOptions"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            compress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" argv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'optimize-minimize'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只有传入 -p 或 --optimize-minimize")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"promise-类型的配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#promise-类型的配置文件","aria-hidden":"true"}},[t._v("#")]),t._v(" Promise 类型的配置文件")]),t._v(" "),e("p",[t._v("如果需要异步加载一些变量作为配置，那么可以使用 Promise 的方式来做。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        mode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'development'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        entry"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app.js'")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"多配置数组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多配置数组","aria-hidden":"true"}},[t._v("#")]),t._v(" 多配置数组")]),t._v(" "),e("p",[t._v("在一些特定场景，需要一次命令，打包多次，这时候就可以使用配置数组的方式，将两次以上的配置以数组的形式导出")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置1")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'development'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置2")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("h2",{attrs:{id:"如果要开发一个-jquery-插件、vue-组件等，需要怎么配置-webpack-？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如果要开发一个-jquery-插件、vue-组件等，需要怎么配置-webpack-？","aria-hidden":"true"}},[t._v("#")]),t._v(" 如果要开发一个 "),e("code",[t._v("JQuery")]),t._v(" 插件、"),e("code",[t._v("Vue")]),t._v(" 组件等，需要怎么配置 Webpack ？")]),t._v(" "),e("h2",{attrs:{id:"webpack-的占位符-hash-、-chunkhash-、-contenthash-有什么区别和联系？-最佳实践是什么？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-的占位符-hash-、-chunkhash-、-contenthash-有什么区别和联系？-最佳实践是什么？","aria-hidden":"true"}},[t._v("#")]),t._v(" Webpack 的占位符 "),e("code",[t._v("[hash]")]),t._v(" 、"),e("code",[t._v("[chunkhash]")]),t._v(" 、 "),e("code",[t._v("[contenthash]")]),t._v(" 有什么区别和联系？ 最佳实践是什么？")]),t._v(" "),e("p",[t._v("这几个占位符都会在打包后生产 hash 值。 都可以通过 "),e("code",[t._v("[xxx:length]")]),t._v("(默认 20) 的语法来指定长度。可以与其他占位符结合使用。例如： "),e("code",[t._v("[name].[hash:8].js")])]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("[hash]")]),t._v(" 是整个项目的 hash 值，根据每次编译的内容计算得到的，每次编译后都会生产新的 hash 值，所以修改项目内的任何文件都会导致所有文件的 hash 值发生变化；\n在一个项目中入口不同，但是生产的 hash 是相同的，所以 hash 无法实现前端静态资源在浏览器上长缓存，而应该使用 "),e("code",[t._v("chunkhash")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("[chunkhash]")]),t._v(" 是根据入口文件(entry)进行依赖解析，构建对应的 chunk，生成相应的 hash； 只要组成 entry 的模块没有改变，则对应的 hash 也是不变的，所以一般项目优化时，会将公共库代码拆分到一起，因为公共库代码变动较少，使用 "),e("code",[t._v("chunkhash")]),t._v(" 可以发挥最长缓存的作用；")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("[contenthash]")]),t._v(" 在使用 chunkhash 会存在一个问题，当一个 JS 文件中引入了 CSS 文件， 编译后它们的 hash 是相同的。只要 JS 文件内容发生变化，再次编译后，hash 就会发生变化。而与之关联的，没有任何改变 CSS 文件的 hash 也会发生改变。针对这种情况，可以把 CSS 从 JS 中使用 "),e("code",[t._v("mini-css-extract-plugin")]),t._v(" 或者 "),e("code",[t._v("extract-text-webpack-plugin")]),t._v(" 抽离出来并使用 contenthash")])]),t._v(" "),e("li",[e("p",[t._v("目前支持的占位符")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("占位符")]),t._v(" "),e("th",[t._v("含义")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("[hash]")])]),t._v(" "),e("td",[t._v("模块标识符的hash")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("[chunkhash]")])]),t._v(" "),e("td",[t._v("chunk 内容的hash")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("[name]")])]),t._v(" "),e("td",[t._v("模块名称会取文件名")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("[id]")])]),t._v(" "),e("td",[t._v("模块标识符")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("[query]")])]),t._v(" "),e("td",[t._v("模块的 query ,例如文件名？后面的字符串")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("[function]")])]),t._v(" "),e("td",[t._v("一个return出一个 string 作为 filename 的函数")])])])])])]),t._v(" "),e("h2",{attrs:{id:"webpack-的-sourcemap-有几种形式？-分别有什么特点？-sourcemap-配置的最佳实践是什么？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-的-sourcemap-有几种形式？-分别有什么特点？-sourcemap-配置的最佳实践是什么？","aria-hidden":"true"}},[t._v("#")]),t._v(" Webpack 的 SourceMap 有几种形式？ 分别有什么特点？ SourceMap 配置的最佳实践是什么？")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("devtool")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("构建速度")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("重新构建速度")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("生产环境")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("品质(quality)")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("留空，none")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("+++")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("+++")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("打包后的代码")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("eval")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("+++")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("+++")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("no")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("生成后的代码")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("cheap-eval-source-map")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("++")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("no")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("转换过的代码（仅限行）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("cheap-module-eval-source-map")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("o")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("++")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("no")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("原始源代码（仅限行）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("eval-source-map")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("–")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("no")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("原始源代码")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("cheap-source-map")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("o")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("no")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("转换过的代码（仅限行）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("cheap-module-source-map")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("o")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("no")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("原始源代码（仅限行）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("inline-cheap-source-map")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("o")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("no")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("转换过的代码（仅限行）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("inline-cheap-module-source-map")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("o")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("no")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("原始源代码（仅限行）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("source-map")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("–")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("–")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("原始源代码")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("inline-source-map")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("–")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("–")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("no")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("原始源代码")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("hidden-source-map")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("–")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("–")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("原始源代码")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("nosources-source-map")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("–")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("–")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("无源代码内容")])])])]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("+++")]),t._v(" 非常快速, "),e("code",[t._v("++")]),t._v(" 快速, "),e("code",[t._v("+")]),t._v(" 比较快, "),e("code",[t._v("o")]),t._v(" 中等, "),e("code",[t._v("-")]),t._v(" 比较慢, "),e("code",[t._v("--")]),t._v(" 慢")])]),t._v(" "),e("p",[e("strong",[t._v("一般在实际项目中，推荐生产环境不使用或者使用 source-map（如果有 Sentry 这类错误跟踪系统），开发环境使用"),e("code",[t._v("cheap-module-eval-source-map")]),t._v("。")])]),t._v(" "),e("h2",{attrs:{id:"什么是-bundle-，什么是-chunk-什么是-module-？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是-bundle-，什么是-chunk-什么是-module-？","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是 bundle ，什么是 chunk 什么是 module ？")]),t._v(" "),e("h2",{attrs:{id:"能不能手写一个-webpack-配置？记住重点配置项：entry、output、module-rules（loader）和plugin。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#能不能手写一个-webpack-配置？记住重点配置项：entry、output、module-rules（loader）和plugin。","aria-hidden":"true"}},[t._v("#")]),t._v(" 能不能手写一个 Webpack 配置？记住重点配置项："),e("code",[t._v("entry")]),t._v("、"),e("code",[t._v("output")]),t._v("、"),e("code",[t._v("module.rules")]),t._v("（loader）和"),e("code",[t._v("plugin")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"在-js-文件中怎么调用-loader-来处理一个模块？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在-js-文件中怎么调用-loader-来处理一个模块？","aria-hidden":"true"}},[t._v("#")]),t._v(" 在 JS 文件中怎么调用 Loader 来处理一个模块？")]),t._v(" "),e("h2",{attrs:{id:"loader-的解析顺序是怎样的？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#loader-的解析顺序是怎样的？","aria-hidden":"true"}},[t._v("#")]),t._v(" Loader 的解析顺序是怎样的？")]),t._v(" "),e("h2",{attrs:{id:"什么是-javascript-的模块化开发？有哪些可以遵循的规范？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是-javascript-的模块化开发？有哪些可以遵循的规范？","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是 JavaScript 的模块化开发？有哪些可以遵循的规范？")]),t._v(" "),e("h2",{attrs:{id:"webpack-中怎么获取一个模块引用另外一个模块是传入的-query？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-中怎么获取一个模块引用另外一个模块是传入的-query？","aria-hidden":"true"}},[t._v("#")]),t._v(" Webpack 中怎么获取一个模块引用另外一个模块是传入的 query？")]),t._v(" "),e("h2",{attrs:{id:"怎么实现-webpack-的按需加载？什么是神奇注释？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#怎么实现-webpack-的按需加载？什么是神奇注释？","aria-hidden":"true"}},[t._v("#")]),t._v(" 怎么实现 Webpack 的按需加载？什么是神奇注释？")]),t._v(" "),e("h2",{attrs:{id:"babel-的-preset-env-是什么？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#babel-的-preset-env-是什么？","aria-hidden":"true"}},[t._v("#")]),t._v(" Babel 的 preset-env 是什么？")]),t._v(" "),e("h2",{attrs:{id:"懂得-babel-的原理吗？你会手写-babel-插件吗？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#懂得-babel-的原理吗？你会手写-babel-插件吗？","aria-hidden":"true"}},[t._v("#")]),t._v(" 懂得 Babel 的原理吗？你会手写 Babel 插件吗？")]),t._v(" "),e("h2",{attrs:{id:"babel-怎么做-polyfill，polyfill-的最佳实践是什么？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#babel-怎么做-polyfill，polyfill-的最佳实践是什么？","aria-hidden":"true"}},[t._v("#")]),t._v(" Babel 怎么做 Polyfill，Polyfill 的最佳实践是什么？")]),t._v(" "),e("h2",{attrs:{id:"babel-怎么针对不同的浏览器打包不同的适配代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#babel-怎么针对不同的浏览器打包不同的适配代码","aria-hidden":"true"}},[t._v("#")]),t._v(" Babel 怎么针对不同的浏览器打包不同的适配代码?")])])},[],!1,null,null,null);a.default=n.exports}}]);