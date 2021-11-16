var fs = require('fs');

var vmtools = require('./tools/tools_node');

function GetCode(){
    var code = '';
    code += vmtools.GetCode() + '\r\n';
    code += fs.readFileSync(`${__dirname}/broswer/EventTarget.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/broswer/WindowProperties.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/broswer/Window.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/broswer/Location.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/broswer/Navigator.js`) + '\r\n';

    code += 'debugger;\r\n';
    return code
}

module.exports = {
    GetCode
}