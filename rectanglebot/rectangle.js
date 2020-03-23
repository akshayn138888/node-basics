const readline = require("readline");
const fs = require("fs")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("How wide is the rectangle?\n", width => {
  console.log("width: ", width);
  rl.question("How high is the rectangle?\n", height => {
    console.log("height; ", height);
    rl.question("What is the output file name?\n", fileName => {
      console.log("fileName: ", fileName);
      createFileWithStars(width, height, fileName);
      rl.close();
    });
  });
});

function createFileWithStars(width, height, fileName) {
    let output = "";

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            output += "* ";
        }
        output += "\n";
    }

    fs.writeFile(`${fileName}.txt`, output, err => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(`wrote "${fileName}" to disk`);
    });
}