const express = require('express')
const app = express()
const port = 3000
const env = process.env.DEPLOY_ENVIRONMENT || "dev"

app.get('/', (req, res) => res.send(`Hello World! I\'m in the ${env} environment!!!`))
app.get('/ping', (req, res) => res.send('pong'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))