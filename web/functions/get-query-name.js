var http = require('http');
var url = require('url');

// ex: http://localhost:3000/index.html?name=Moaaz&id=3
// name=Moaaz

module.exports = function getQueryName(request) {
    var name =  url.parse(request.url, true).query.name;
    if (typeof name !== 'undefined'){
        return name;
    }
        
    return '';
}