import { Product } from "../models/product.js"

let getAllProducts =async  (req, res) => {
    let products = await Product.find({})
    res.json(products)
    
}
let getSingleProduct =async  (req, res) => {
    let product = await Product.findById(req.params.id)
    res.json(product)
}
let createProduct =async  (req, res) => {
    let { name, image, description, price } = req.body
    // let product = await Product.create({ name, image, description, price })
    let product=new Product({ name, image, description, price })
    await product.save()
    res.json(product)
}
let updateProduct = async (req, res) => {
    let product = await Product.findByIdAndUpdate(req.params.id, req.body)
    res.json(product)
}
let deleteProduct =async  (req, res) => {
    let product = await Product.findByIdAndDelete(req.params.id)
    res.json(product)
    
}


export { getAllProducts, getSingleProduct, createProduct, updateProduct, deleteProduct }