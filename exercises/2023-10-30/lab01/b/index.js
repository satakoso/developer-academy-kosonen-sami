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

readFile("hello.txt")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

writeFile("hello.txt", "Hello World")
  .then(() => console.log("succes"))
  .catch((err) => console.log(err));
