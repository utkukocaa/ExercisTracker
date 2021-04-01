const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')




mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
  const app = require('./app')
  app.listen(process.env.PORT)
})