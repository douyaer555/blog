var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？ ---> \nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var path = request.url
  var query = ''
  if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
  var pathNoQuery = parsedUrl.pathname
  var queryObject = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/



if(path == '/'){  //只是路径，和文件对应的没有关系
    console.log('小源说：得到 HTTP 路径\n' + path) //出现在bash上
    response.end()
}else if (path == '/index'){
    response.setHeader('Content-Type','text/html;charset=utf-8')
    response.write('我pang回来了小源！') //出现在浏览器上
    response.end()
}else{
    response.statusCode == 404
    response.end()
}








  /******** 代码结束，下面不要看 ************/
}) // var server = 反括号  不要删！！

server.listen(port)
console.log('恭喜你小源！监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)
