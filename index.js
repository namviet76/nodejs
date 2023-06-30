const express = require('express')
const app = express()
const port = 3000


app.get('/tintuc', (req, res) => {
    res.send('chao the gioi xinh dep')
})

app.listen(port, () => {
    console.log('Example app listen an port 3000')
})