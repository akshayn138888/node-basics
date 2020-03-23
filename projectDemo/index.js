// Some NPM commands:

// To start an NPM project, do:
// npm init

// To install a package do:
// npm install <package-name> <package-name> ...

// To remove a package, do:
// npm remove <package-name>

// When requiring a package, use the name of the package
// as listed in the dependencies section in package.json file
const QRCode = require("qrcode");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is the QRCode fileName? \n >", fileName => {
  rl.question("What text do you want to encode? \n >", text => {
    QRCode.toFile(`${fileName}.png`, text, error => {
      console.log(`QRCode save to ${fileName}`);
      rl.close();
    });
  });
});