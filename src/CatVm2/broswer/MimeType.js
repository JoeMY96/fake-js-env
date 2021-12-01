catvm.memory.MimeType = {};


var MimeType = function MimeType(){
    throw new TypeError('Illegal constructor');
};
catvm.safefunction(MimeType);

Object.defineProperties(MimeType.prototype, {
    [Symbol.toStringTag]: {
        value: "MimeType",
        configurable: true
    }
});

MimeType.prototype.description = '';
MimeType.prototype.enabledPlugin = null;
MimeType.prototype.suffixes = '';
MimeType.prototype.type = '';


for (var proto in MimeType.prototype) {
    if (typeof(MimeType.prototype[proto]) != 'function') {
        MimeType.prototype.__defineGetter__(proto, function(){
            throw new  TypeError('Illegal constructor');
            // return this[pro];
        })
    }
}


catvm.memory.MimeType.new = function(data, initPlugin) {
    var mimeType = {};

    if (data != undefined) {
        mimeType.description = data.description;
        mimeType.suffixes = data.suffixes;
        mimeType.type = data.type;
        mimeType.enabledPlugin = initPlugin;
    }


    mimeType.__proto__ = MimeType.prototype;
    return mimeType;
}