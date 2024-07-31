import Product from "../models/product.model.js";
import mongoose from "mongoose";
export const productcreation=async(req,res,next)=>{
    const user=req.body.curruser.id
    const {name, description, price,offerprice,category, images } = req.body;

    try {
        console.log(user)
        const newProduct = new Product({
            name,
            description,
            price,
            offerprice,
            category,
            images,
            owner: user
        });

        const product = await newProduct.save();
        res.json(product);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}

export const updateproduct=async(req,res,next)=>{
    try{
    const product =await Product.findById(req.params.id)
    
    if(!product) return res.status(400).json({msg:"product not exist"})
    if(req.body.curruser.id !== product.owner.toString()) return res.status(400).json({msg:"you cannot edit others product"})
    const {name, description, price,offerprice,category, images } = req.body;
    const updatedproduct=await Product.findByIdAndUpdate(req.params.id,{$set:{
        name,
        description,
        category,
        price,
        offerprice,
        images
    }},{new:true})
    res.status(200).json(updatedproduct)}
    catch(err){
        console.error(err.message)
        res.status(500).send("server error")
    }


}

export const deleteproduct=async(req,res,next)=>{
    try {
        const product =await Product.findById(req.params.id)
    if(!product) return res.status(400).json({msg:"product not exist"})
    if(req.body.curruser.id !== product.owner.toString()) return res.status(400).json({msg:"you cannot delete others product"})
    await Product.findByIdAndDelete(req.params.id)
    res.status(200).json({msg:"product deleted"})
    } catch (err) {
        console.error(err.message)
        res.status(500).send("server error")
    }
}

export const getallproducts=async(req,res,next)=>{
    try {
        const allproducts=await Product.find()
        res.status(200).json(allproducts)
    } catch (err) {
       console.error(err.message)
        res.status(500).send("server error")
        
    }
}

export const getproductlisting=async(req,res,next)=>{
    try {
        console.log(req.params.id)
        const id=new mongoose.Types.ObjectId(req.params.id)
        // const documentToFind = { _id: new ObjectId(req.params.id) };
        if(req.params.id !== req.body.curruser.id) return res.status(400).json({msg:"forbidden"})
        const showlisting=await Product.find({owner:id})
        console.log(showlisting)
        res.status(200).json(showlisting)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("server error")
    }
}
export const getproductbycategory=async(req,res,next)=>{
    try {
        console.log(req.params.category)
        const showlisting=await Product.find({category:req.params.category})
        console.log(showlisting)
        res.status(200).json(showlisting)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("server error")
    }
}