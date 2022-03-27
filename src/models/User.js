const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');



const userSchema = mongoose.Schema({
    userName: {
        type: String,
        unique: true
    },
    email:{
        type:String,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    roles:[{
        ref: 'Rol',
        type: mongoose.Schema.Types.ObjectId
    }]
}, {
    timestamps: true,
    versionKey: false
})

userSchema.statics.encryptpassword=async(password)=>{
    const salt = await bcrypt.genSaltSync(10);
    return await bcrypt.hashSync(password, salt);
     
}

userSchema.statics.comperPassword=async(password,receivePassword)=>{
   return await bcrypt.compareSync(receivePassword, password); 
}


const modelUser = mongoose.model('User', userSchema);

module.exports = modelUser