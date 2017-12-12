var path = require('path')

module.exports = [{
  entry: './index.js',
  output: {
    library: 'canvg',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'build'),
    filename: 'canvg.js'
  },
  node: {
    fs: 'empty',
    path: 'empty',
    console: false,
    global: true,
    process: false,
    Buffer: false,
    __filename: 'mock',
    __dirname: 'mock',
    setImmediate: false
  },
  externals: {
    rgbcolor: 'rgbcolor',
    stackblur: 'stackblur',
    xmldom: 'xmldom',
    sizzle: 'sizzle'
  }
}]
