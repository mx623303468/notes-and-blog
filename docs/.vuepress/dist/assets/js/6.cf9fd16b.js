(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{191:function(t,s,a){t.exports=a.p+"assets/img/MCSS.975d6da9.jpg"},207:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"css-模块化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css-模块化","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS 模块化")]),t._v(" "),n("h2",{attrs:{id:"oocss"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#oocss","aria-hidden":"true"}},[t._v("#")]),t._v(" OOCSS")]),t._v(" "),n("p",[t._v("面向对象的 CSS，主要思想是 "),n("strong",[t._v("“结构和设计的分离，容器和内容的分离”")]),n("br"),t._v("\n简单的说就是"),n("strong",[t._v("抽象公共类")]),t._v("，把复用度高的样式抽取出来，例如：")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".mt20")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".tc")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".abs")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".clearfix:after")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ‘’"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("clear")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" both"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("这种方案的思路是通过提高复用性，减少命名的需要，因为有的样式直接用公共类名就能实现，不需要额外命名。"),n("br"),t._v("\n它的缺点是滥用就可能付出代价，比如有 10 个组件用同一个普通类名，那么修改样式只需要改一处 CSS 即可，但是在 10 个组件上用同一个公共类名比如 mt20，意味着把 mt20 改成 mt15，你需要改 10 处的 class。所以公共样式少用公共类，不要图省事儿。")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.w3cplus.com/css/oocss-concept",target:"_blank",rel:"noopener noreferrer"}},[t._v("OOCSS 的概念介绍"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"smacss"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#smacss","aria-hidden":"true"}},[t._v("#")]),t._v(" SMACSS")]),t._v(" "),n("p",[n("strong",[t._v("可扩展和模块化结构")]),t._v(" CSS 的一个简称。"),n("br"),t._v("\n主要目标是 "),n("strong",[t._v("减少代码量，简化代码的维护")]),t._v("。"),n("br"),t._v("\n在整个系列中，包括了 base，modules，staes，themes。修饰符使用的是--，子模块使用__符号。")]),t._v(" "),n("ul",[n("li",[t._v("Base 基本规则，整体样式，比如 body、input、button、form")]),t._v(" "),n("li",[t._v("Layout 布局规则，比如 顶部，页脚，边栏，模块的大小等")]),t._v(" "),n("li",[t._v("Module 可复用的模块样式规则")]),t._v(" "),n("li",[t._v("State 状态样式 比如 隐藏 当前高亮")]),t._v(" "),n("li",[t._v("Theme 主题 控制整体 UI")])]),t._v(" "),n("p",[t._v("针对不同分类，可以使用不同的前缀来划分命名空间，就不多赘述了。")]),t._v(" "),n("h2",{attrs:{id:"atomic-css"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#atomic-css","aria-hidden":"true"}},[t._v("#")]),t._v(" Atomic CSS")]),t._v(" "),n("p",[n("strong",[t._v("原子化 CSS 结构。")])]),t._v(" "),n("p",[t._v("优点是可以写基础 视觉功能小的，单用途的 CSS，相当于把每一个单一的作用定义一个 Class，确保整个样式表没有一条重复的样式，这样复用性是最高的，代码也最少，但是每个元素就需要一堆的 Class。")]),t._v(" "),n("p",[t._v("这种思路可谓另辟蹊径，独树一帜。当然优缺点都很明显：CSS 代码最小化了，而 HTML 膨胀了；虽然不用考虑命名，但是要记一堆新规则。")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mt-10 w-100 h-15"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n// mt-10 > margin-top: 10px; // w-100 > width: 100px; // h-15 > height: 15px;\n")])])]),n("h2",{attrs:{id:"mcss"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mcss","aria-hidden":"true"}},[t._v("#")]),t._v(" MCSS")]),t._v(" "),n("p",[t._v("多层级的 CSS"),n("br"),t._v(" "),n("img",{attrs:{src:a(191),alt:""}})]),t._v(" "),n("h2",{attrs:{id:"amcss"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#amcss","aria-hidden":"true"}},[t._v("#")]),t._v(" AMCSS")]),t._v(" "),n("p",[t._v("针对属性的 CSS 设计"),n("br"),t._v("\nAMCSS 是 Attribute Modules for CSS 的缩写，表示借助 HTML 属性来进行 CSS 相关开发。")]),t._v(" "),n("p",[t._v("传统我们多个模块特性是通过多个类名进行控制的，典型如下："),n("br"),t._v(" "),n("code",[t._v('<div class="button button-large button-blue">Button</div>')])]),t._v(" "),n("p",[t._v("而 AMCSS 则是基于属性控制，例如："),n("br"),t._v(" "),n("code",[t._v('<div button="large blue">Button</div>')])]),t._v(" "),n("p",[t._v("为了避免属性名称冲突，我们可以加一个统一的前缀，例如 am-，于是有："),n("br"),t._v(" "),n("code",[t._v('<div am-button="large blue">Button</div>')])]),t._v(" "),n("p",[t._v("此技术能够实行离不开这个一个选择器："),n("strong",[n("code",[t._v("[attr~=”val”]")])]),t._v("。")]),t._v(" "),n("p",[n("a",{attrs:{href:"http://amcss.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AMCSS 官网"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"bem"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bem","aria-hidden":"true"}},[t._v("#")]),t._v(" BEM")]),t._v(" "),n("p",[t._v("Block 块"),n("br"),t._v("\nheader container content menu"),n("br"),t._v("\nElement 元素"),n("br"),t._v("\nmenu-item, list-item, head-title"),n("br"),t._v("\nModifier 修饰符"),n("br"),t._v("\nchecked, disabled, highlighted, fixed, size-big, color-red")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 无状态按钮 --\x3e")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("button"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Normal button"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 成功状态的按钮 --\x3e")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("button--state-success"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Success button"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 危险状态的按钮 --\x3e")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("button--state-danger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Danger button"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);