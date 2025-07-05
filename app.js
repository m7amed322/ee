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
    console.log("before")
    console.log(Customer)
    console.log(Cart);
    console.log(Product)
    //insuuficient balance use case
    // CustomerService.addToCart(Customer,["cheese"],[2]);
    // CustomerService.checkout()

    //all good use case
    CustomerService.addToCart(Customer,["cheese"],[1]);
    CustomerService.checkout()

    //length must be equal
    // CustomerService.addToCart(Customer,[],[2]);
    // CustomerService.checkout()

    //order out of stack
    // CustomerService.addToCart(Customer,["cheese"],[8]);
    // CustomerService.checkout()

    //not found use case product because not in the list
    // CustomerService.addToCart(Customer,["iphone"],[2]);
    // CustomerService.checkout()

    //  expired product use case notice: i have just changed 
    // the sum in the expirationDate in productt.js file inside 
    // model folder to a substraction so it is expired 14 days ago 
    //right now it is sum so no expiredDate will not happen because it is after 14 days from now
    // CustomerService.addToCart(Customer,["cheese"],[1]);
    // CustomerService.checkout()
    console.log("after")
    console.log(Customer);
    console.log(Cart);
    console.log(Product)
})