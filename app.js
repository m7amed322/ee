const winston = require("winston")
const express = require("express")
const CustomerService = require("./services/customer")
const Customer =require("./model/customer");
const Product = require("./model/product");
const Cart = require("./model/cart");
const app = express()
require("./startup/logging")();
require("./startup/config")();
// require("./startup/db")();
app.use(express.json());
app.use("/",(req,res,next)=>{
res.json({
    message:"our first endpoint"
});
//the lenght of array of quantity must be equal to the length of array products

})
const port = process.env.PORT || 1000
app.listen(port,()=>{
    winston.info(`listening to port ${port}...`)
    CustomerService.addToCart(Customer,["cheese"],[1]);
    CustomerService.checkout()
    console.log(Customer);
    console.log(Cart);
    console.log(Product)
})