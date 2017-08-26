import express from "express"
import path from "path"
import IOTA from 'iota.lib.js'

const app = express()


app.get('/', (req, res) => res.sendFile( path.resolve(__dirname, '../client/index.html')))


const iota = new IOTA({
    'host': 'http://localhost',
    'port': 14265
})


app.get('/iota', (req, res) => res.send(200, 'IOTA Version: ' + iota.version ))

app.get('/iota/node-info', (req, res) => {
  iota.api.getNodeInfo(function(error, success) {
      if (error) {
          console.error(error);
      } else {
          console.log(success);
      }
  })
  res.send(200, 'Node Info: ' + iota.version )
})



app.get('/test', (req, res) => res.send(200, 'IOTA Test: ' ))


app.listen(3000, () =>(console.log('IOTA app listening on port 3000!')))
