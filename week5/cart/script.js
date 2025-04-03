let cart = [
  { name: "T-shirt", price: 20 },
  { name: "Jeans", price: 50 },
  { name: "Sneakers", price: 80 },
  { name: "Backpack", price: 30 },
];
console.log(cart);
let total = 0;

for (let i = 0; i < cart.length; i++) {
  total = total + cart[i].price;
  console.log("Total is", total);
}
console.log("Total price is", total, "dollars.");
let discount = 0.1;
if (total > 100) {
  let newtotal = total - total * discount;
  console.log("Discounted price is", newtotal, "dollars.");
}
