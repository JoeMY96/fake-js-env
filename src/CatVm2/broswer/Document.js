var Document = function Document(){
};
catvm.safefunction(Document);

Object.defineProperties(Document.prototype, {
    [Symbol.toStringTag]: {
        value: "Document",
        configurable: true
    }
});

// *************   属性  ****************************
document = {};
document.__proto__ = Document.prototype;

document.addEventListener = function addEventListener(a, b, c, d){
    debugger;
};catvm.safefunction(document.addEventListener);

/*
补createElement
*/
document.createElement = function createElement(tagName){
    var newTagName = tagName.toLowerCase() + "";
    if (catvm.memory.htmlElements[newTagName] == undefined) {
        debugger; // 说明没有补全
    }
    return catvm.proxy(catvm.memory.htmlElements[newTagName]());

};catvm.safefunction(document.createElement);
// **************************************************


document = catvm.proxy(document);