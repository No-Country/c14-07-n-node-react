const mongoose = require('mongoose');
const { USERNAME_MONGODB, PASSWORD_MONGODB, DBANAME_MONGODB } = require('./config/env.d');

mongoose.connect(`${USERNAME_MONGODB}:${PASSWORD_MONGODB}@${DBANAME_MONGODB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('I <3 MongoDB... '))
    .catch(e => console.log('(_8(|) Douh!', e))














