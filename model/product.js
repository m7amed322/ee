// this is if i will do in a database but i will do an object for every collect
//to save the latency that will happen in the database


// import mongoose from "mongoose"
// const productSchema = new mongoose.Schema({
//   name: { type: String, minlength: 3, maxlength: 255, required: true },
//   quantity: {
//     type: Number,
//     min: 0,
//     required: true,
//   },
//   weight:{
//     type: Number,
//     min: 0,
//   },
//   expirationDate:Date,
//   price:{type:Number,min:0,required:true},
//   shippable:Boolean,

// });
// const Product = mongoose.model("product", productSchema);

//this is simulate for products collection
const Product = [
{
    name:"cheese",
    quantity:6,
    weight:200,
    expirationDate:new Date(2025,7,19),
    price:60,
    shippable:true
},
{
    name:"TV",
    quantity:15,
    weight:10000,
    price:12000,
    shippable:true
},
{
     name:"Mobile scratch card",
    quantity:30,
    price:4,
    shippable:false
}
]

module.exports = Product;
