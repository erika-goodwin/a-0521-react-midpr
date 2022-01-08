const _ = require("underscore");

//[Node module assuming process]
//1. Core module?
//2. File? or folder?
//3. node_modules?

const result = _.contains([1, 2, 3], 2);
console.log(result);  //true
