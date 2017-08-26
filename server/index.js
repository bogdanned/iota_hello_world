import express from "express"
import path from "path"
import IOTA from 'iota.lib.js'

const app = express()


app.get('/', (req, res) => res.sendFile( path.resolve(__dirname, '../client/index.html')))


const iotaInstance = new IOTA({
  provider: 'https://sandbox.iotatoken.com/api/v1/',
  sandbox: true
})


app.get('/iota', (req, res) => res.send(200, 'IOTA Version: ' + iotaInstance.version ))

app.get('/iota/node-info', (req, res) => {
  let nodeInfo = 'to be retirved ....'

  res.send(200, 'Node Info: ' + nodeInfo )
})



app.get('/test', (req, res) => res.send(200, 'IOTA Test: ' ))


app.listen(3000, () =>(console.log('IOTA app listening on port 3000!')))
