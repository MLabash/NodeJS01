var http = require('http');
var url = require('url');

module.exports = function getFilePath(request) {
    var filePath =  'web' +  url.parse(request.url, true).pathname;
    if (filePath.charAt(filePath.length - 1) === '/') {
        filePath += 'index.html';
    }
    return  filePath;
}


    