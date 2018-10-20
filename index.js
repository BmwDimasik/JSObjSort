const obj = [
  {name: 'John', age: 21, weight: 309},
  {name: 'Marie', age: 96, weight: 112},
  {name: 'Alice', age: 32, weight: 245},
  {name: 'Drake', age: 18, weight: 298},
  {name: 'Josh', age: 76, weight: 35},
  {name: 'Mark', age: 32, weight: 15},
  {name: 'Joanna', age: 98, weight: 37},
  {name: 'Mike', age: 13, weight: 405},
];

sortByAge(obj);

obj.forEach(obj => {
  console.log("name: ", obj.name + ', age: ', obj.age + ", weight: ", obj.weight);
})

function sortByAge(obj) {
  obj.sort(function(a, b) {
    if (a.age == b.age) {
      return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
    } else {
      if (a.age > b.age) {
        return 1;
      } else {
        return -1;
      }
    }
  })
}
