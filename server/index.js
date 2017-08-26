import express from "express"


const app = express()


app.get('/*', (req, res) => res.sendfile('./server/index.html'))


app.listen(3000, () =>(console.log('IOTA app listening on port 3000!')))
