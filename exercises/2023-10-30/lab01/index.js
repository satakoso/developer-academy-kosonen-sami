const fs = require("fs");

function readFile(file) {
  fs.readFile(file, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
}

function writeFile(name, content) {
  fs.writeFile(name, content, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("succes!!");
    }
  });
}

let originalFile = "hello.txt";
let copiedFile = "copyOfHello";

fs.readFile(originalFile, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(copiedFile, data, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Kopiointi valmis!");
      }
    });
  }
});
