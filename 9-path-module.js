// Path module

const path = require('path');

console.log(path.sep);

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);
// creates absolute path 
const absolute = path.resolve(__dirname, "./content", "subfolder", "test.txt");

console.log(absolute);
// C:\Users\Tom\NodeProj\content\subfolder\test.txt