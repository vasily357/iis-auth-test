const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/myapp', (req, res) => {
  res.send('Hello, IIS!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})