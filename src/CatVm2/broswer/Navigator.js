var Navigator = function Window(){
    throw new  TypeError('Illegal constructor');
};
catvm.safefunction(Navigator);

Object.defineProperties(Navigator.prototype, {
    [Symbol.toStringTag]: {
        value: "Navigator",
        configurable: true
    }
});

// *************   属性  ****************************

// **************************************************
navigator = {};
navigator.__proto__ = Navigator.prototype;

navigator = catvm.proxy(navigator);