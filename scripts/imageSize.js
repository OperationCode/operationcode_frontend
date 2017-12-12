/* eslint-disable */
const path = require('path');
const fs = require('fs');

let fileArray = [];

const read = dir =>
  fs
    .readdirSync(dir)
    .reduce(
      (files, file) =>
        fs.statSync(path.join(dir, file)).isDirectory()
          ? files.concat(read(path.join(dir, file)))
          : files.concat(path.join(dir, file)),
      []
    )
    .filter(file => typeof file === 'string')
    .map(image => {
      if (fs.lstatSync(image).size > 1000000) {
        fileArray.push(image);
      }
    });

read('src/images/');

if (fileArray.length > 0) {
  console.log(`The following image(s) are over our 1MB size limit: ${fileArray}`);
  process.exit(-1);
} else {
  process.exit(0);
}
