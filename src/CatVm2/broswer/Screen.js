var Screen = function Screen(){
    throw new  TypeError('Illegal constructor');
};
catvm.safefunction(Screen);

Object.defineProperties(Screen.prototype, {
    [Symbol.toStringTag]: {
        value: "Screen",
        configurable: true
    }
});

// *************   属性  ****************************
Screen.prototype.availHeight = 1055;
Screen.prototype.availWidth = 1858;
// **************************************************
screen = {};
screen.__proto__ = Screen.prototype;

screen = catvm.proxy(screen);