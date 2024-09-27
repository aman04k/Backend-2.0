import mongoose from "mongoose";

const usernameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: Number,
        required: true,
    },

}, {
    timeseries: true
});

export const User = mongoose.model('User', usernameSchema);