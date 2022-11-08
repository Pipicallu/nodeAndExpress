
 // Modules - split up your code so as not to have everything in the same file
// common JS - every file is a module by default.
const names = require('./4-names');
const sayHi = require("./5-utils");
const data = require('./6-alternative-Flavour');
// if we have a function within a module that has been invoked and we haven't added it as a variable it will run when imported
require("./7-mind-grenade");

console.log(names);
console.log(data);

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);
