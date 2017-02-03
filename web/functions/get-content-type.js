var path = require('path');

module.exports = function getContentType(filePath) {
    return (path.extname(filePath) == '.html' ?'text/html':'text/plain');
}