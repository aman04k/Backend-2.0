import express from "express";
import mongoose from "mongoose";
import productRouter from "./routes/product.js";
import cors from "cors";

const app = express();
const port = 3000;
mongoose.connect('mongodb+srv://aman:venKNQK2Vfpbi1Yc@cluster0.wlul6.mongodb.net/xyz')
app.use(cors())
app.use(express.json())

app.use('/product',productRouter)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});