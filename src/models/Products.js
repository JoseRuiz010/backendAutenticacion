const mongoose = require('mongoose');

const productSchema=mongoose.Schema({
    name:String,
    category:String,
    price:Number, 
    imgUrl:String,
    user:{
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId
    }
},{
    timestamps:true,
    versionKey:false
})

const modelProducto= mongoose.model('Product',productSchema);

module.exports= modelProducto