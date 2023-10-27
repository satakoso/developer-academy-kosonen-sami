const fs = require("fs");

function readFile(file) {
  function myFunction(resolve, reject) {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  }
  let promise = new Promise(myFunction);
  return promise;
}

function writeFile(file, content) {
  function myFunction(resolve, reject) {
    fs.writeFile(file, content, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  }
  let promise = new Promise(myFunction);
  return promise;
}

readFile("file.txt")
  .then((data) => writeFile("copy.txt", data))
  .then(() => console.log("succes!"))
  .catch((err) => console.log(err));
