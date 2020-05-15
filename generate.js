let ejs = require('ejs')
let fs = require('fs')
let data = require('./metadata.json')

ejs.renderFile('./template.ejs', { photos: data }, {}, (_, str) => {
  fs.writeFileSync('index.html', str)
})

