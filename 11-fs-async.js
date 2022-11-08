const { readFile, writeFile } = require("fs");

//we provide a call back = which runs when we're done like an event listener

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/deadpool-boobie-names.txt",
      `here is the result of the first two files: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return
        }
        console.log(result);
      }
    );
  });
});
