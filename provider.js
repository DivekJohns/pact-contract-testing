const express = require('express')
const app = express()
const port = 3000

app.get('/orders', (req, res) => {
    const orders = [
        {id: 1,items: [{name: 'burger',quantity: 2,value: 100}]}]
      res.send(orders)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app