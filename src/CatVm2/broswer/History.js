var History = function Window(){
    throw new  TypeError('Illegal constructor');
};
catvm.safefunction(History);

Object.defineProperties(History.prototype, {
    [Symbol.toStringTag]: {
        value: "History",
        configurable: true
    }
});


// *************   属性  ****************************
History.prototype.back = function back(){debugger;}; catvm.safefunction(History.prototype.back);

// **************************************************
history = {};
history.__proto__ = History.prototype;

history = catvm.proxy(history);