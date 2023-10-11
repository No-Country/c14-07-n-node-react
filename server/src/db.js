const mongoose = require('mongoose');
// const { MONGO_DBA, DB_USER, DB_PASSWORD } = require('./config.js');



mongoose.connect(`mongodb+srv://turnowave:d3CarJG7VWoVeofg@main.nquntlx.mongodb.net/`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

console.log('[db] Connected to');












