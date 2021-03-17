const { Server } = require('@logux/server')
const pg = require('pg-promise')

const server = new Server(
  Server.loadOptions(process, {
    subprotocol: '1.0.0',
    supports: '1.x',
    root: __dirname
  })
)

server.auth(({ userId, token }) => {
  return process.env.NODE_ENV === 'development'
})

server.listen()
let db = pg()(process.env.DATABASE_URL)
