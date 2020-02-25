const mongoose = require('mongoose');
const URL = "mongodb://localhost:27017/express"

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}

mongoose.connect(URL, options)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

let db = mongoose.connection

db.on('error', console.error.bind(console, 'mongodb connection error:'));