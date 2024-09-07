require('dontenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sn',(req,res)=>{
    res.send('Hello Supratim')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})