webpackJsonp([7],{"0HOP":function(t,i,a){t.exports=a.p+"static/img/bf.70240b2.jpg"},FZMJ:function(t,i,a){t.exports=a.p+"static/img/be.4623e31.jpg"},GKnP:function(t,i,a){t.exports=a.p+"static/img/bg.37c5317.jpg"},q5kn:function(t,i,a){t.exports=a("sIM2")},sIM2:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",[e("h1",[t._v("预览版不适配问题解析")]),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"yi-ip-duan-kou-xing-shi-depc-duan-ce-shi-wang-zhan-bu-gua-pei"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yi-ip-duan-kou-xing-shi-depc-duan-ce-shi-wang-zhan-bu-gua-pei","aria-hidden":"true"}},[t._v("¶")]),t._v(" 一、IP + 端口形式的PC端测试网站不适配")]),t._v(" "),e("br"),t._v(" "),e("p",[e("b",[t._v("        1、问题描述：")]),t._v("对于域名是IP+端口的形式的测试网站，适配可能无法生效")]),t._v(" "),e("br"),t._v(" "),e("p",[e("b",[t._v("        2、解决方案：")]),t._v("域名别名中不添加端口号")]),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"er-fu-wu-qi-bai-ming-dan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#er-fu-wu-qi-bai-ming-dan","aria-hidden":"true"}},[t._v("¶")]),t._v(" 二、服务器白名单")]),t._v(" "),e("br"),t._v(" "),e("p",[e("b",[t._v("        1、问题描述：")]),t._v("项目创建完成，预览版抓取问题，其它问题排查未报错")]),t._v(" "),e("br"),t._v(" "),e("p",[e("b",[t._v("        2、解决方案：")]),t._v("与客户进行确认是否PC服务器端增加了安全机制，如果网站做了防抓取等限制的话，XCLOUD服务器抓取数据的IP地址为：139.217.1.38， 增加该IP地址到对方网络白名单即可。")]),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"san-https-bu-gua-pei"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#san-https-bu-gua-pei","aria-hidden":"true"}},[t._v("¶")]),t._v(" 三、https不适配")]),t._v(" "),e("br"),t._v(" "),e("p",[e("b",[t._v("        1、问题描述：")]),t._v("对于https的网站，云适配Xcloud无法在线预览，插入代码也无法适配")]),t._v(" "),e("br"),t._v(" "),e("p",[e("b",[t._v("        2、背景描述：")]),t._v("浏览器默认是不允许在 https 里面引用 http 资源的，以前一般都会弹出提示框。随着技术的发展，现在的浏览器对于此种情况直接不加载或报错该请求资源。所以导致xcloud无法在线预览，插入代码也无法适配。")]),t._v(" "),e("br"),t._v(" "),e("p",[e("b",[t._v("        3、临时解决方案：")]),t._v("因云适配的相关适配资源存在微软的blob服务器中，微软blob的真实请求链接支持Https的访问。所以，我们可将插入的代码,如：http://a.yunshipei.com/013582404bd78ad3c016b8fffefe6a9a/allmobilize.min.js    替换成微软的域名，并变更为https即可，如：https://yspstore.blob.core.chinacloudapi.cn/013582404bd78ad3c016b8fffefe6a9a/allmobilize.min.js")]),t._v(" "),e("br"),t._v(" "),e("p",[e("b",[t._v("        4、相关操作：")]),t._v("可通过在命令终端通过nslookup指令查询，可以查到DNS记录的生存时间还可以指定使用哪个DNS服务器进行解释。格式如下：")]),t._v(" "),e("br"),t._v(" "),e("p",[e("img",{attrs:{src:a("FZMJ"),alt:"示例1",title:"规范"}})]),t._v(" "),e("br"),t._v(" "),e("p",[e("b",[t._v("        5、私有部署 发布测试版临时解决方案：")]),t._v("客户不想加了代码后影响正式环境，可能过修改allmobilize.min.js文件中的testServer解决，修改成 yspstaging.blob.core.chinacloudapi.cn 即可。")]),t._v(" "),e("br"),t._v(" "),e("p",[e("img",{attrs:{src:a("0HOP"),alt:"示例1",title:"规范"}})]),t._v(" "),e("br"),t._v(" "),e("p",[e("img",{attrs:{src:a("GKnP"),alt:"示例2",title:"规范"}})]),t._v(" "),e("br"),t._v(" "),e("p",[e("b",[t._v("        6、最终建议解决方案：")]),t._v("将XCLOUD整体架设成HTTPS的链接。包括预览地址或者最少也应该保证a.yunshipei.com，和 c.yunshipei.com 是https的。")]),t._v(" "),e("br")])}]},s=a("VU/8")(null,e,!1,null,null,null);i.default=s.exports}});
//# sourceMappingURL=7.20962f7f35d0e714257b.js.map