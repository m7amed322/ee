const Cart= require("../model/cart")
const Product = require("../model/product")
const CustomerService = {
  addToCart: (Customer, products, quantity) => {
    if (!Array.isArray(products)) {
      throw new Error("products must be an array");
    }
    const paidAmount = 0;
    const totalWeights = 0;
    const index = 0;
    products.map((product) => {
      if (!Product.find((product) => product.name === product)) {
        throw new Error("not found");
      }
      const productt = Product.find((product) => {
        product.name === product;
      });
      const currentDate = new Date;
      currentDate.setHours(0, 0, 0, 0);
      productt.expirationDate.setHours(0, 0, 0, 0);
      if(currentDate<expirationDate){
        throw newError ("date is expired");
      }
      paidAmount += productt.price;
      if (productt.weight) {
        totalWeights += productt.weight;
      }
      if (productt.quantity == 0) {
        throw new Error("out of stack");
      }
      const result = Customer.balance - paidAmount;
      if (result < 0) {
        throw new Error("inSufficient balance");
      }
      productt.quantity - quantity[index];
      index++;
    });
    Cart.push({
      Customer,
      products,
      quantity,
      paidAmount,
      totalWeights,
    });
    console.log(paidAmount);
  },
};
module.exports=  CustomerService