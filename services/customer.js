const Cart = require("../model/cart");
const Product = require("../model/product");
const Customer = require("../model/customer");
const CustomerService = {
  addToCart: (Customer, products, quantity) => {
    if (!Array.isArray(products)) {
      console.log("products must be an array");
      return;
    }
    if (products.length !== quantity.length) {
      console.log("length must be equal");
      return;
    }
    let paidAmount = 0;
    let totalWeights = 0;
    let index = 0;
    products.forEach((product) => {
      const productName = product;
      const productQuantity = quantity[index];
      const productt = Product.find((x) => x.name === productName);
      if (!productt) {
        console.log("not found");
        console.log(productName);
        return;
      }
      if (productt.expirationDate) {
        if (new Date(Date.now()) > productt.expirationDate) {
          console.log("this product is expired");
          return;
        }
      }
      if (productt.quantity < productQuantity) {
        console.log("order out of stock");
        return;
      }
      paidAmount += productt.price * productQuantity;
      if (productt.weight) {
        totalWeights += productt.weight * productQuantity;
      }
      if (productt.quantity == 0) {
        console.log("out of stack");
        return;
      }

      productt.quantity -= productQuantity;
      index++;
    });
    const cartProduct = {
      Customer,
      products,
      quantity,
      paidAmount,
      totalWeights,
    };
    Cart.push(cartProduct);
    Customer.cart = cartProduct;
  },
  checkout: () => {
    if (Customer.balance < Customer.cart.paidAmount) {
      console.log("insuffecient balance");
      return;
    }
    Customer.balance -= Customer.cart.paidAmount;
    if (Customer.cart.products.length > 0) {
      for (let i = 0; i < Customer.cart.products.length; i++) {
        const product = Product.find((x) => x.name === Customer.cart.products[i]);
        console.log(
          `${Customer.cart.quantity[i]}x  ${Customer.cart.products[i]}                    ${
            product.price * Customer.cart.quantity[i]
          }`
        );
      }
      console.log(`
        Subtotal              ${Customer.cart.paidAmount}
        Shipping              12
        Amount                ${12 + Customer.cart.paidAmount}`);
      Customer.cart = null;
      if(Cart.indexOf(Customer.cart)!= -1){
        Cart.splice(Cart.indexOf(Customer.cart), 1);
      }
    } else {
      console.log("cart is empty");
      return;
    }
  },
};
module.exports = CustomerService;
