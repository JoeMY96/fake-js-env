catvm.memory.navigator = {};

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
Navigator.prototype.plugins = [];

navigator = {};
navigator.__proto__ = Navigator.prototype;

/*
    将Navigator原型上的属性全部复制到实例navigator上
    再将Navigator原型上的全部属性改为不可set
    以此保证和浏览器上的状态一致
*/
for (catvm.memory.navigator.temp in Navigator.prototype) {
    navigator[catvm.memory.navigator.temp] = Navigator.prototype[catvm.memory.navigator.temp];
    Navigator.prototype.__defineGetter__(catvm.memory.navigator.temp, function(){
        throw new  TypeError('Illegal constructor');
    });
}

// **************************************************


navigator = catvm.proxy(navigator);