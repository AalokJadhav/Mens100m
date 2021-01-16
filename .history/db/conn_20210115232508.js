const mongoose = require('mongoose');

mongoose.connect('mongodb://locahost:27017/olymics', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( ()=> {
    console.log('Connection is successful..!');
}).catch((e) => {
    console.log('No Connection');
})