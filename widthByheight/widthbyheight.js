const fs = require("fs");

const width = process.argv[2]; // 4
const height = process.argv[3]; // 3

let output = "";

for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    output += "* ";
  }
  output += "\n";
}

const fileName = `${width}_by_${height}`;

fs.writeFile(`${fileName}.txt`, output, err => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`wrote "${fileName}" to disk`);
});