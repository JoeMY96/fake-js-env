catvm.proxy = function(obj){
    // if (catvm.memory.config.proxy === false){
    //     return obj
    // }

    return new Proxy(obj, {
        set(target, property, value){
            console.log('正在设置', target, '+++',  property, '+++', value);
            return Reflect.set(...arguments);
        },
        get(target, property, reveiver){
            console.log('正在获取', target,  '+++', property,  '+++', target[property]);
            return target[property]
        }
    })

}