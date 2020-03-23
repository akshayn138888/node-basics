const fs = require("fs");

const fileName = process.argv[2];

fs.readFile(fileName, (err, data) => {
  const fileContents = data.toString();
  const linesArray = fileContents.split("\n");
  linesArray.forEach((line, index) => {
    console.log(`${index + 1} | ${line}`);
  });
});