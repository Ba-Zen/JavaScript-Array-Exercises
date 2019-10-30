// Filter Method
//const scores = [10, 30, 15, 25, 50, 40, 5];

// const filteredScores = scores.filter(score => {
//   return score > 20;
// });
//console.log(filteredScores);

const users = [
  { name: 'Bill', premium: true },
  { name: 'Bo', premium: false },
  { name: 'Bam', premium: false },
  { name: 'Baz', premium: true }
];

const premiumUsers = users.filter(user => user.premium);

//console.log(premiumUsers);

// Map Method
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

const salePrices = prices.map(price => price / 2);
//console.log(salePrices);

const products = [
  { name: 'gold star', price: 20 },
  { name: 'mushroom', price: 40 },
  { name: 'green shells', price: 30 },
  { name: 'banana', price: 10 },
  { name: 'red shells', price: 50 }
];

const saleProducts = products.map(product => {
  return product.price > 30
    ? { name: product.name, price: product.price / 2 } // protect original array by creating new object
    : product;
});
//console.log(saleProducts);

// Reduce Method
//const scores = [10, 20, 60, 40, 70, 90, 30];

// const result = scores.reduce((acc, curr) => {
//   if (curr > 50) {
//     acc++;
//   }
//   return acc;
// }, 0);
// console.log(result);

const scores = [
  { player: 'Bob', score: 70 },
  { player: 'Barry', score: 30 },
  { player: 'Bob', score: 80 },
  { player: 'Baz', score: 90 }
];

const bobTotal = scores.reduce((acc, curr) => {
  if (curr.player === 'Bob') {
    acc += curr.score;
  }
  return acc;
}, 0);

console.log(bobTotal);

// commit after cuhhh
