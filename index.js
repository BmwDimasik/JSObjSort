const obj = [
  {name: 'John', age: 21, weight: 309},
  {name: 'Marie', age: 96, weight: 112},
  {name: 'Alice', age: 32, weight: 245},
  {name: 'Drake', age: 18, weight: 298},
  {name: 'Josh', age: 76, weight: 35},
  {name: 'Mark', age: 52, weight: 15},
  {name: 'Joanna', age: 98, weight: 37},
  {name: 'Mike', age: 13, weight: 405},
];

obj.forEach(obj => {
  console.log("name: ", obj.name + ', age: ', obj.age + ", weight: ", obj.weight);
})
