const express = require('express')
const { sso } = require('node-expose-sspi')
const app = express()
const port = process.env.PORT || 3000

app.get('/myapp', (req, res) => {
  res.json({
    sso: req.sso,
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})