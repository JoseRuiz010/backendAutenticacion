const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/test",
{
useNewUrlParser:true,
useUnifiedTopology:true
})
.then(db=>console.log('Db is conect'))
.catch(err=> console.log(err))