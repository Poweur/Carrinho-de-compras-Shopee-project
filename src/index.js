import * as cartService from "./services/cart.js";
import * as cartItem from "./services/item.js";


const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!")

//criando dois itens
const item1 = await cartItem.createItem("hotwheels ferrari", 20.99, 1);
const item2 = await cartItem.createItem("hotwheels lamborghini", 39.99, 3);
const item3 = await cartItem.stockItem("hotwheels city pista", 159.90, "em breve!")
const item4 = await cartItem.stockItem("hotwheels formula1", 125.39, "em 15 dias!")

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.addItem(myWhishList, item3)
await cartService.addItem(myWhishList, item4)

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

await cartService.displaycart(myCart);
await cartService.displaywish(myWhishList);




await cartService.calculateTotal(myCart);