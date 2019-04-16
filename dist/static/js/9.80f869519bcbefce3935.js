webpackJsonp([9],{"+xmK":function(s,a,t){s.exports=t.p+"static/img/bl.39d72a8.jpg"},"9/T0":function(s,a,t){s.exports=t("IL8i")},IL8i:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var s=this,a=s.$createElement,r=s._self._c||a;return r("section",[r("h1",[s._v("特殊需求的组件定制化封装")]),s._v(" "),r("br"),s._v(" "),r("div",{staticStyle:{color:"red"}},[r("p",[r("b",[s._v("        注意：")]),s._v("当使用自定义组件时，IDE平台的class名是不会在适配项目中的DOM中被渲染出来的，所以为了避免类名的重复，我们需要在自定义组件中的DOM重构中将class添加进最外层的DOM中。")])]),s._v(" "),r("br"),s._v(" "),r("p",[r("img",{attrs:{src:t("IU6D"),alt:"规范1",title:"规范"}})]),s._v(" "),r("br"),s._v(" "),r("h2",{attrs:{id:"yi-wu-feng-lun-bo-zi-ding-yi-feng-zhuang"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#yi-wu-feng-lun-bo-zi-ding-yi-feng-zhuang","aria-hidden":"true"}},[s._v("¶")]),s._v(" 一、无缝轮播自定义封装")]),s._v(" "),r("br"),s._v(" "),r("p",[s._v("        1、封装自定义API预处理DOM函数")]),s._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"hljs language-javascript"}},[s._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/*\n    * 自定义组件数据预处理————无缝轮播 \n    * @$ : zepto对象\n    * @tar : $的DOM对象 \n    *\n    **/")]),s._v("\n    seamlessCarousel : "),r("span",{pre:!0,attrs:{class:"hljs-function"}},[r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),r("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v(" $ , tar ")]),s._v(") ")]),s._v("{\n        "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 1、声明list变量：存储每一个轮播li")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" list = "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v(";\n        "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 2、DOM重组")]),s._v("\n        tar.each("),r("span",{pre:!0,attrs:{class:"hljs-function"}},[r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),r("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("i")]),s._v(")")]),s._v("{\n            list += "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"<li><a href="')]),s._v("+ $("),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(").attr("),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"href"')]),s._v(") +"),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"><img src="')]),s._v(" + $("),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(").find("),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"img"')]),s._v(").src() + "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"></a></li>"')]),s._v(";\n        });\n        \n        "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 3、返回")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" list;\n        \n    }\n\n")])]),s._v(" "),r("p",[s._v("        2、数据采集中的使用")]),s._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"hljs language-javascript"}},[s._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/*\n * 数据预处理：\n * 直接调用了封装在自定义API中的方法\n*/")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 1、声明需要循环的父对象")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" tar = $("),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('".side_right .down .newsInfo"')]),s._v(").find("),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"a"')]),s._v(");\n\n\n\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" data = {\n    "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": $("),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('".side_right .down .title"')]),s._v(").html(),\n    "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": context._helpers.seamlessCarousel( $ , tar )\n};\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" data;\n\n")])]),s._v(" "),r("p",[s._v("        3、HTML模板中的DOM重组")]),s._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"hljs language-html"}},[s._v("\n "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Dblank-1"')]),s._v(">")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"title"')]),s._v(">")]),s._v("\n        {{{ title }}}\n    "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"boxContainer"')]),s._v(">")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ul")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"banner"')]),s._v(">")]),s._v("\n            {{{ content }}}    \n        "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ul")]),s._v(">")]),s._v("    \n    "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n\n")])]),s._v(" "),r("p",[s._v("        4、样式封装")]),s._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"hljs language-less"}},[r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/*\n * 自定义组件无缝轮播样式封装\n * 说明：\n *    1)、调用less函数不可跳过传参\n *    2)、封装该函数type主要针对头部样式的变换\n *    3)、在该函数中，轮播图片是有设置了宽高的，但可以进行跟参调整\n * 约束：请注意DOM结构\n * @type 类型——可选封装组件类型\n *  [\n *     { // 类型1 ———— 白底主色调icon\n *          type1           参数说明：简约类型头部 【必填】\n *          @titleHeight    参数说明：标题栏高度 【选填】 默认40px    单位 px/rem/em;\n *          @bannerWidth    参数说明：图片宽度 【选填】 默认200px    单位 px/rem/em;\n *          @bannerHeight   参数说明：图片及容器高度 【选填】 默认125px    单位 px/rem/em; \n *     }\n *  ] \n *\n**/")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".seamlessCarouselPublicSet")]),s._v("(@bannerWidth,@bannerHeight){\n    "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("border-bottom")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4px")]),s._v(" solid @lineC;\n    "),r("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".boxContainer")]),s._v("{\n        "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("margin")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10px")]),s._v(";\n        "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("position")]),s._v(": relative;\n        "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("overflow-x")]),s._v(": auto;\n        "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("overflow-y")]),s._v(": hidden;  \n        "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("position")]),s._v(": relative;\n        "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": @bannerHeight;\n        "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("background")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#fff")]),s._v(";\n        "),r("span",{pre:!0,attrs:{class:"hljs-selector-tag"}},[s._v("ul")]),s._v("{\n            "),r("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".resize")]),s._v(";\n            "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("position")]),s._v(": absolute;\n            "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("top")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n            "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("left")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n            "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("list-style-type")]),s._v(": none;\n            "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("display")]),s._v(": flex;\n            "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("flex-direction")]),s._v(": row;\n            "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("flex-wrap")]),s._v(": nowrap;\n            "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("overflow-x")]),s._v(": auto;\n            "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("overflow-y")]),s._v(": hidden;\n            "),r("span",{pre:!0,attrs:{class:"hljs-selector-tag"}},[s._v("li")]),s._v("{\n                "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("padding")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10px")]),s._v(";\n                "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("position")]),s._v(": relative;\n                "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": @bannerWidth;\n                "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("max-height")]),s._v(": @bannerHeight;\n                "),r("span",{pre:!0,attrs:{class:"hljs-selector-tag"}},[s._v("a")]),s._v("{\n                    "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("display")]),s._v(": block;\n                    "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100%")]),s._v(";\n                    "),r("span",{pre:!0,attrs:{class:"hljs-selector-tag"}},[s._v("img")]),s._v("{\n                        "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200px")]),s._v(";\n                        "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": @bannerHeight;\n                    }\n                    "),r("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".imgName")]),s._v("{\n                        "),r("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".resize")]),s._v(";\n                        "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("position")]),s._v(": absolute;\n                        "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("bottom")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0px")]),s._v(";\n                        "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("left")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0px")]),s._v(";\n                        "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("190px")]),s._v(";\n                        "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("color")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#fff")]),s._v(";\n                        "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("text-align")]),s._v(": center;\n                        "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("background")]),s._v(": rgba("),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(","),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(","),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(","),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.6")]),s._v(");\n                    }\n                }\n                \n            }\n            "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("li")]),s._v(":first-child{\n                "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("padding-left")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n                "),r("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".imgName")]),s._v("{\n                    "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("left")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10px")]),s._v(";\n                    "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("180px")]),s._v(";    \n                }    \n            }\n            "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("li")]),s._v(":last-child{\n                "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("padding-right")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n            }\n            "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("li")]),s._v(":not(:first-child){\n                "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("padding-left")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n            }\n        } \n    }\n}\n\n"),r("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".seamlessCarouselType1")]),s._v("(@titleHeight){ "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 自定义无缝轮播组件类型1——头部简约类型")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".title")]),s._v("{\n        "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("padding")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10px")]),s._v(";\n        "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": @titleHeight;\n        "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("border-bottom")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1px")]),s._v(" solid @mc;\n        "),r("span",{pre:!0,attrs:{class:"hljs-selector-tag"}},[s._v("a")]),s._v("{\n            "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("display")]),s._v(": block;\n            "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("color")]),s._v(": @mc;\n            "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("line-height")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40px")]),s._v(";\n            "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("text-decoration")]),s._v(": none;\n            "),r("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".flex")]),s._v(";\n            "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("span")]),s._v(":first-child{\n                "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("font-weight")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("600")]),s._v(";\n            }\n            "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("span")]),s._v(":last-child{\n                "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("color")]),s._v(": @fc2; \n                "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("font-size")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("14px")]),s._v(";\n            }\n        }\n    }    \n}\n\n"),r("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".seamlessCarouselPublic")]),s._v("(@type,"),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("@titleHeight")]),s._v(":"),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40px")]),s._v(","),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("@bannerWidth")]),s._v(":"),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200px")]),s._v(","),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("@bannerHeight")]),s._v(":"),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("125px")]),s._v(",) "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("when")]),s._v(" ( @type = type1 ){\n    "),r("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".seamlessCarouselType1")]),s._v("(@titleHeight);\n    "),r("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".seamlessCarouselPublicSet")]),s._v("(@bannerWidth,@bannerHeight);    \n}\n\n\n\n"),r("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".Dblank-1")]),s._v("{ "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// type1 调用")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".seamlessCarouselPublic")]),s._v("(type1); \n}\n\n")])]),s._v(" "),r("p",[s._v("        5、全局轮播函数封装")]),s._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"hljs language-javascript"}},[s._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/*\n     * 无缝轮播函数封装\n     * @tar: 封装的组件中的轮播部分 【组件名 .banner】\n     * @direction: 轮播图方向 【数字】 ： 大于0向右滑动，小于0向左滑动 !!该参数不能为0\n     * \n    **/")]),s._v("    \n    "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" seamlessCarousel = "),r("span",{pre:!0,attrs:{class:"hljs-function"}},[r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),r("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("tar,direction")]),s._v(")")]),s._v("{\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" ul = tar;\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" ulHtml = ul.html();\n        ul.html( ulHtml + ulHtml );\n        \n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" li = tar.find("),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"li"')]),s._v(");\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" liWidth = li.eq("),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(").width();\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" liSize = li.size();\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" ulWidth = liWidth*liSize;\n        ul.width( ulWidth );\n        \n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" speed = direction; "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 正数为向左轮播;负数为向右轮播")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" num = "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n            \n        "),r("span",{pre:!0,attrs:{class:"hljs-function"}},[r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("slider")]),s._v("("),r("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(")")]),s._v("{\n            "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 向左滑动处理函数")]),s._v("\n            "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v("( speed < "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" ){\n                "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v("( ul.css("),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"left"')]),s._v(")== ((-ulWidth/"),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(")+"),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'px'")]),s._v(") ){\n                    num = "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n                }\n                num--;\n                ul.css("),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"left"')]),s._v(",num+"),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"px"')]),s._v(");\n            }\n            "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 向右滑动处理函数")]),s._v("\n            "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v("( speed > "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" ){\n                "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v("( ul.css("),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"left"')]),s._v(")== "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0px"')]),s._v(" ){\n                    num = -ulWidth/"),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(";    \n                }\n                num++;\n                    ul.css("),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"left"')]),s._v(",num+"),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"px"')]),s._v(");\n                }\n            }\n                    \n            "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" timer = setInterval(slider,"),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v(");\n    };  \n        \n    "),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 函数调用")]),s._v("\n    $("),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('".Dblank-1"')]),s._v(").length && seamlessCarousel( $("),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('".Dblank-1 .banner"')]),s._v(") ,  "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(" );\n\n")])]),s._v(" "),r("p",[s._v("        6、效果展示")]),s._v(" "),r("br"),s._v(" "),r("p",[r("img",{attrs:{src:t("+xmK"),alt:"规范1",title:"规范"}})]),s._v(" "),r("br"),s._v(" "),r("h2",{attrs:{id:"er-yi-ji-cai-dan-lan-zi-ding-yi-zu-jian-feng-zhuang"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#er-yi-ji-cai-dan-lan-zi-ding-yi-zu-jian-feng-zhuang","aria-hidden":"true"}},[s._v("¶")]),s._v(" 二、一级菜单栏自定义组件封装")])])}]},n=t("VU/8")(null,r,!1,null,null,null);a.default=n.exports},IU6D:function(s,a,t){s.exports=t.p+"static/img/bk.74e7358.jpg"}});
//# sourceMappingURL=9.80f869519bcbefce3935.js.map