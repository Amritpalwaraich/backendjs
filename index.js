const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get("/login", (req, res) => {
    res.send(" coding using chai channel ")
})

app.get('/twitter', (req, res) => {
    res.send("your on twitter for working ")
})

app.listen(port, () => {
    console.log(`Example app listen on port ${port}`)
})