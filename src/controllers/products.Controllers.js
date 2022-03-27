const productSchema = require("../models/Products");

const createProducts=async(req,res)=>{
    const newProduct=new productSchema({
        name:req.body.name,
        category: req.body.category,
        price:req.body.price,
        imgUrl:req.body.imgUrl
    })
    
    const productSave=await newProduct.save()
    
    console.log(newProduct);
    res.status(201).json(productSave);
    
}

const getProducts= async(req,res)=>{
   const products= await productSchema.find();

   res.status(200).json(products)
}
const getProductsById=async(req,res)=>{
    const product= await productSchema.findById(req.params.productId);
    res.status(200).json(product)
}
const updateProducts=async(req,res)=>{
    const product= await productSchema.findByIdAndUpdate(req.params.productId, req.body,{
        new:true
    });
    res.status(204).json(product); 
}
const deleteProductById=async(req,res)=>{
    const product= await productSchema.findByIdAndDelete(req.params.productId);
    res.status(204).json(product); 
}

module.exports= {createProducts,getProducts,getProductsById,updateProducts,deleteProductById}

