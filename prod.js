let client = require('scp2')

let server = {
  default: {},
  test: {}
}

let serverConfig = process.env.VUE_APP_MODE ? server[process.env.VUE_APP_MODE] : server.default
console.log('uploading...')
client.scp("./dist/", serverConfig, (err) => {
  console.log(err || 'upload success')
})