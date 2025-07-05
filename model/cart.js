// this is if i will do in a database but i will do an object for every collect
//to save the latency that will happen in the database

// import Customer from "./customer";
// import mongoose from "mongoose";
// const cartSchema = new mongoose.Schema({
//   customer: Customer,
//   paidAmount: { type: Number, min: 0 },
//   shippingFees: { type: Number, min: 0 },
//   customerBalance: Number,
// });
// const Cart = mongoose.model("customer", customerSchema);

//this is a simulate for cart collection
const Cart = [];
module.exports = Cart;
