import express from 'express'
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('2')
})

app.listen(PORT, () => {
  this_causes_error // eslint-disable-line
  console.log(`server started on port ${PORT}`) // eslint-disable-line
})
