const mongoose = require("mongoose");
require("dotenv").config();

const { USER_NAME_DB, PASSWORD_DB, DB_NAME } = process.env;
const uri = `mongodb+srv://${USER_NAME_DB}:${PASSWORD_DB}@cluster0.zlvthsl.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conected to database'))
  .catch(e => console.log('Error on database', e))