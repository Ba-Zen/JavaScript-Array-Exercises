const scores = [10, 30, 15, 25, 50, 40, 5];

// const filteredScores = scores.filter(score => {
//   return score > 20;
// });
// console.log(filteredScores);

const users = [
  { name: 'Bill', premium: true },
  { name: 'Bo', premium: false },
  { name: 'Bam', premium: false },
  { name: 'Baz', premium: true }
];

const premiumUsers = users.filter(user => user.premium);

console.log(premiumUsers);
