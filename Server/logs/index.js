var fs = require('fs')
var path = require('path')

// create a write stream (in append mode)
const logStream = fs.createWriteStream(path.join(__dirname, 'server.log'), { flags: 'a' })
module.exports = logStream