const { readFileSync, writeFileSync } = require("fs");
// const fs = require("fs");
// fs.readFileSync() -- same thing as above
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
// takes two arguements the file path and then the content, there is a third argument which allows to append to the file
writeFileSync(
  "./content/deadpool-baby-names.txt",
  `here is the result of the first two files: ${first}, ${second}`,
  { flag: "a" }
);
console.log("done with this task");
console.log("starting the next one");