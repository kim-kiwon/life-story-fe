import express from 'express'
import nextModule from 'next'

const port = 3000
const { NODE_ENV } = process.env

const dev = process.env.NODE_ENV !== 'production'
const app = nextModule({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(express.urlencoded({ extended: true }))
  server.use(express.json({ limit: '10mb' }))

  server.all('*', (req, res) => {
    handle(req, res)
  })

  server.listen(port, () => {
    /* eslint-disable no-console */
    console.log(`🚀 Server is running`, {
      NODE_ENV,
    })
  })
})
