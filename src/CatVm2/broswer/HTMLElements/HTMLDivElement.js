var HTMLDivElement =  function HTMLDivElement(){
    throw new  TypeError('Illegal constructor');
};catvm.safefunction(HTMLDivElement);

Object.defineProperties(HTMLDivElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLDivElement",
        configurable: true
    }
});

catvm.memory.htmlElements['div'] = function(){
    var div = new (function(){});

    div.align = "";
    
    div.__proto__ = HTMLDivElement.prototype;
    
    return div;

}