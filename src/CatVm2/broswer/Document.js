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
// **************************************************


document = catvm.proxy(document);