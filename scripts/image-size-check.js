/* eslint-disable */

const fs = require('fs')
const globby = require('globby')

const MAXIMUM_IMAGE_SIZE = 1024 * 1024 // 1MB

async function checkSize(types) {
  const paths = await globby(types)
  const oversizedImages = paths.filter(p => {
    const file = fs.statSync(p)
    return file.size > MAXIMUM_IMAGE_SIZE
  })

  if (oversizedImages.length){
    console.log('Following files are oversized')
    console.log(oversizedImages)
    process.exit(-1)
  }

}
checkSize(['src/images/**/*.png', 'src/images/**/*.jpg'])