const express = require('express')

const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send('working high on  ')

})

app.listen(port, () => {
    console.log(`Example app listen on port ${port}`)
})