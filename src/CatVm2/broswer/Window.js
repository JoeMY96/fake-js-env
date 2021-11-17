window = this;

var Window = function Window(){
    throw new  TypeError('Illegal constructor');
};
catvm.safefunction(Window);

Object.defineProperties(Window.prototype, {
    [Symbol.toStringTag]: {
        value: "Window",
        configurable: true
    }
});

// **************************************************
window.settimeout = function(code, delay){
    typeof(code)  == 'function' ? code() : undefined;
    typeof(code)  == 'string' ? eval(code) : undefined;
    return 1;

};catvm.safefunction(window.settimeout);

Window.prototype.PERSISTENT = 1;
Window.prototype.TEMPORARY = 0;
window.open = function open(){debugger;}; catvm.safefunction(window.open);
// **************************************************

Window.prototype.__proto__ = WindowProperties.prototype;

window.__proto__ = Window.prototype;
Window = catvm.proxy(Window);
window = catvm.proxy(window);