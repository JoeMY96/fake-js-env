function xx(pr, fo, name) {
    var code = "";
    switch (typeof(pr[fo])) {
        case 'function':
            var temp = name + '.prototype.' + fo; 
            code = temp + '=' + "function " + fo + '(){debugger;}; catvm.safefunction(' + temp + ');';
            break;
        case 'object':
            var temp = name + '.prototype.' + fo; 
            code = temp + '=' + 'catvm.proxy(class ' + fo + '{});';
            break;
        default:
            code = name + '.prototype.' + fo + '=' + pr[fo] + ';';
            break;
    }
    return code;

}


function getcode(pr, name) {
    var code = "";
    for (var fo in pr.__proto__) {
        code += xx(pr, fo, name) + "\r\n";
    }
    return code;
}