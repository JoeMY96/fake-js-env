catvm.proxy = function(obj){
    // if (catvm.memory.config.proxy === false){
    //     return obj
    // }

    return new Proxy(obj, {
        set(target, property, value){
            console.table([{'类型': '设置', '调用者': target, '设置对象': property, '结果': value}])
            // console.log('正在设置', target, '+++',  property, '+++', value);
            return Reflect.set(...arguments);
        },
        get(target, property, reveiver){
            console.table([{'类型': '获取', '调用者': target, '获取对象': property, '结果': target[property]}])
            // console.log('正在获取', target,  '+++', property,  '+++', target[property]);
            return target[property]
        }
    })

}