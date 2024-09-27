import express from "express";
import { getAllProducts, getSingleProduct, createProduct, updateProduct, deleteProduct } from "../controllers/productController.js";
import { get } from "mongoose";
const router = express.Router();

router.get('/', getAllProducts)
router.get('/:id', getSingleProduct )
router.post('/', createProduct )
router.put('/:id', updateProduct )
router.delete('/:id', deleteProduct )


export default router