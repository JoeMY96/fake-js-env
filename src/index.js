var fss = require('fs');
var catvm2 = require('./CatVm2/catvm2_node');
const {VM, VMScript} = require('vm2');

var catvm2code = catvm2.GetCode();
const codefile = `${__dirname}/code.js`;
const vm = new VM();

const script = new VMScript(catvm2code + fss.readFileSync(codefile), `${__dirname}/正在调试的代码.js`);

debugger;
vm.run(script);
debugger;
