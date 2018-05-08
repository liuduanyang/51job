let xhr=new XMLHttpRequest();
// XMLHttpRequest只是一个JavaScript对象,它是由客户端(即浏览器)提供的（而不是JavaScript原生的）

/*
    请求相关

    xhr.open(method,url,async)   调用HTTP请求
    第一个参数为请求方式 GET POST.. 第二个参数为请求的资源地址可为绝对地址或相对地址 第三个参数为是否采用异步默认为ture

    xhr.send(string)   发送HTTP请求
    参数表示要发送的消息 如果是GET请求则可为null，因为GET请求把消息放入了xhr.open()中的url参数中了

    xhr.setRequestHeader()  用于设置请求头 该方法一定要写在open和send方法中间
    
    --------------------------------------------------------------------------------------

    响应相关
    
    xhr.responseText  获得字符串形式的响应数据
    xhr.responseXML获得XML形式的响应数据
    xhr.status  xhr.statusText 以数字或文本形式返回HTTP状态码或状态信息  readyState大于等于3时起作用
    xhr.getAllResponseHeaders()  获取所有响应头部字段  readyState大于等于3时起作用
    xhr.getResponseHeader(某个响应头部字段) 查询响应中的某个字段的值  参数不区分大小写  readyState大于等于3时起作用

    xhr.readyState 表示服务器响应的变化 

    readyState属性：
    0：表示请求未初始化，即open还没有调用
    1：服务器连接已建立，open已经调用
    2：请求已接收，接收到响应头信息
    3：请求处理中，接收到响应体信息
    4：请求已完成，响应就绪即响应完成

    通过onreadystatechange事件监听readyState变化来判断响应是否完成

    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            // do some thing.
        }
    }
    注意：为了确保跨浏览器的兼容性，必须要在调用.open()方法之前指定事件处理程序，
    仔细想想也有道理，毕竟.open()方法的执行也包含在该事件处理程序的监听范围之内对吧？

    xhr.abort() 取消当前响应，关闭连接并且结束任何未决的网络活动。
    这个方法把 XMLHttpRequest 对象重置为 readyState 为 0 的状态，并且取消所有未决的网络活动。
    例如，如果请求用了太长时间，而且响应不再必要的时候，可以调用这个方法。
    另一个解释：该方法会令XHR对象实例停止触发事件，并且不再允许访问任何和响应有关的对象属性，
               但是需要注意的是，当终止AJAX请求后，你需要手动对XHR对象实例进行解绑以释放内存空间。

    请求头：
    每个HTTP请求和响应都会带有相应的头部信息，包含一些与数据，收发者网络环境与状态等相关信息。
    XMLHttpRequest对象提供的.setRequestHeader()方法为开发者提供了一个操作这两种头部信息的方法，
    并允许开发者自定义请求头的头部信息。

    默认情况下，当发送AJAX请求时，会附带以下头部信息：

    Accept：浏览器能够处理的内容类型；
    Accept-Charset：浏览器能够显示的字符集；
    Accept-Encoding：浏览器能够处理的压缩编码；
    Accept-Language：浏览器当前设置的语言；
    Connection：浏览器与服务器之间连接的类型；
    Cookie：当前页面设置的任何Cookie；
    Host：发出请求的页面所在的域；
    Referer：发出请求的页面URI；
    User-Agent：浏览器的用户代理字符串；

    注意，部分浏览器不允许使用.setRequestHeader()方法重写默认请求头信息，因此自定义请求头信息是更加安全的方法：
    自定义请求头：xhr.setRequestHeader("myHeader", "MyValue")

    更加厉害的 AJAX ：https://juejin.im/post/5a20b1f1f265da432529179c#heading-12


    参考链接 ： https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/readyState
               https://juejin.im/post/5a20b1f1f265da432529179c

    jQuery中的Ajax
    参数集中可选的选项：
    type: 类型，POST GET等
    url: 发送请求的地址
    data: 请求体信息
    dataType: 预期服务器返回的数据类型，如果不指定，jQuery将自动根据HTTP包MIME信息来智能判断，一般我们采用json格式即"json",设置之后ajax()会帮我们自动解析为对象形式
    success: 请求成功后的回调函数，参数是获取的数据 等同于xhr.responseText或xhr.response或xhr.responseXML
    error: 请求失败的回调函数，参数是xhr对象 可以在处理函数中打印状态码 xhr.status

    如果采用jsonp则需要对jQuery中的Ajax进行改造 : dataType:"jsonp" jsonp:"callback"
*/