const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({
    name:String
}, {
     
    versionKey: false
})

const modelRol = mongoose.model('Rol', roleSchema);

module.exports = modelRol