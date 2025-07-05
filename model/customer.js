// this is if i will do in a database but i will do an object for every collect
//to save the latency that will happen in the databasea and you can test it clearly

// import mongoose from "mongoose"
// const customerSchema = new mongoose.Schema({
//   fullName: { type: String, minlength: 3, maxlength: 255, required: true },
//   email: {
//     type: String,
//     minlength: 3,
//     maxlength: 255,
//     required: true,
//     unique: true,
//   },
//   balance:{type:Number,min:0,required:true,default:0}
// });
// const Customer = mongoose.model("customer", customerSchema);

//this is a simulate for customers collection
const Customer = 
{
    fullName:"mohamed ali",
    email:"mohamed@fawry.com",
    balance:10,
    cart:[]
}
;

module.exports = Customer;