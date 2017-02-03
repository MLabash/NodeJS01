var http = require('http');
var url = require('url');
var fs = require('fs');

var getQueryName = require('./web/functions/get-query-name');
var getFilePath = require('./web/functions/get-file-path');
var getContentType = require('./web/functions/get-content-type');

var server = http.createServer(function(request,response){
    
    var queryParam = getQueryName(request);
    var filePath = getFilePath(request);
    var content = '';
    
    try{
       //content = content + fs.readFileSync('web/index.html','utf-8');
       content = content + fs.readFileSync(filePath,'utf-8');
       content = content.replace("Hello", "Hello " + queryParam);
       //var contentType = mime.contentType(path.extname(filePath));    
       response.setHeader('Content-Type', getContentType(filePath));
    }
    catch(error){
        if (error.code === 'ENOENT') {
            content = content +  error.message + '\nFile not found';
            response.statusCode = 404;
            response.setHeader('Content-Type',getContentType(content));
        }
        else {
            throw error;
        }
    }
    response.write(content);
    response.end();
});
server.listen(3000);
                                