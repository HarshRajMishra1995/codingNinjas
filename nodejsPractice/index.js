const express = require('express')

const app = express()

const port = 8001



app.listen(port, (err) => {
  if (err)
  {
    console.log('There is error in running the server',err)
  }
  console.log('The server is running at ',port)
})