const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vikas:vikas@cluster0.ltoxe.mongodb.net/<dbname>?retryWrites=true&w=majority', (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;