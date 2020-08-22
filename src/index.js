const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const env = process.env.DEPLOY_ENVIRONMENT || "dev"

app.get('/', (req, res) => res.send(`Hello World! This is for SOT`))
app.get('/ping', (req, res) => res.send('pong'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))