require('./utils/handleSignals')
const http = require('http')
const serveHandler = require('serve-handler')
const cookie = require('cookie')
const { FILES_MATCH, COOKIE_KEY } = require('./config/env')
const clientConfig = require('./utils/client-config')

const handler = async (request, response) => {
  try {
    await serveHandler(request, response, {
      directoryListing: false,
      public: '/usr/share/public',
      headers: [
        {
          source: FILES_MATCH,
          headers: [{
            key: 'Set-Cookie',
            value: cookie.serialize(COOKIE_KEY, JSON.stringify(clientConfig))
          }]
        }
      ]
    })
  } catch (err) {
    console.error(err)
    response.statusCode = 500
    response.end()
  }
}

http
  .createServer(handler)
  .listen(8080, () => {
    console.log(`Serve-spa is listening port 8080`)
  })
  