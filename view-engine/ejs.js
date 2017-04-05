/* EJS模板引擎测试
 */

    const path =require('path');
    const ejs = require('ejs');
    const input = `<%- $.hello %>
    <%- include('test') %>
    <% $.pets.forEach(function (pet) { %>
      <li><%= pet.name %></li>
    <% }) %>
    <>
    <%% hello world %%>

    <!--hellowrold-->
    <%- $.script %>`

    /* <%= %>的作用
     过滤敏感字符 比如<、>
     var _ENCODE_HTML_RULES = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&#34;',
      "'": '&#39;'
    };
     */
     /* <%- %>的作用
      不过滤敏感字符
     */
    let func = ejs.compile(input, {
        compileDebug:true,
        _with:false,
        filename:path.resolve(__filename), //所有include的路径相对这个路径
        localsName:'$'
    });

    let output = func({
        hello:'world',
        script:'<script>console.log(1)</script>',
        "pets": [
          {
            "name": "Hazel"
          }
        , {
            "name": "Crystal"
          }
        , {
            "name": "Catcher"
          }
        ]
    });
    console.log(output);







