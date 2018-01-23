/* eslint-disable */
const path = require('path');
const fs = require('fs');

const readImageDirectory = dir =>
  fs
    .readdirSync(dir)
    .reduce(
    (files, file) =>
      fs.statSync(path.join(dir, file)).isDirectory()
        ? files.concat(readImageDirectory(path.join(dir, file)))
        : files.concat(path.join(dir, file)),
    []
    )
    .filter(file => typeof file === 'string')
    .filter(image => {
      fs.lstatSync(image).size > 1000000;
    });

const fileArray = readImageDirectory('src/images/');

if (fileArray.length) {
  console.log(`The following image(s) are over our 1MB size limit: ${fileArray}`);
  process.exit(-1);
} else {
  console.log('Test successful 💪 💪 💪 💪 💪 💪');
  process.exit(0);
}
