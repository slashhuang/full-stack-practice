## EJS原理浅析

[ejs的github源码](https://github.com/mde/ejs)

EJS的模板引擎实现分为标签语法解析和函数动态性注入两块。

### XML 语法

```js

    const input = `<%- $.hello %>
                   <%- include('test') %>
                   <!--hellowrold-->
                   <%- $.script %>`

```


EJS采用XML开闭标签和delimeter来标示需要动态渲染的数据。

基本的语法架构:

1、Delimiters 分割符
2、开始标记
    <%=: Escaped output
    <%-: Unescaped output
    <%#: Comments
    <%: Scriptlet
    <%_: Scriptlet, removes all preceeding whitespace
3、闭合标记
    %>: Regular ending tag
    -%>: Removes trailing newline
    _%>: Removes all trailing whitespace
4、语义化标记
    转义 <%% ==> <%
5、文件标记
    <%- include(filename, [locals]) %>


### 采用new Function生成动态代码块

[new Function参考资料](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)

```js
    // returns 6
    new Function('a','b','c',"return a+ b +c")(1,2,3)

```














