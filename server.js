const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const PORT = process.env.PORT || 3003

const app = express()

app.use(bodyParser.json())
app.use('/',express.static(path.join(__dirname)))
app.use('/hotels/icons/',express.static(path.join(__dirname)))
app.use('/hotels/avatars/',express.static(path.join(__dirname)))
app.use('/hotels/:id',express.static(path.join(__dirname,'/index.html')))

app.listen(PORT,(err)=>{
  if (err) throw err
  else {
    console.log('listening on port ', + PORT)
  }
})