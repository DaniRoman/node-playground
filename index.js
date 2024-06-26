const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  let i
  i = 5;
  console.log(i)
  res.send('Hello World, juan !')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})