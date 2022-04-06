require('dotenv').config();
const { MONGO_URL } = process.env;
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = MONGO_URL
db.user = require('./user.model')(mongoose)

module.exports= db