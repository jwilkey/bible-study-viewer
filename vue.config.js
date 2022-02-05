console.log('ENV', process.env.NODE_ENV)
module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '' : '/bible-study-viewer/'
}
