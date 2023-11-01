
// Finde max number from array of object
function findMaxNumber(array, key) {
  let max = array[0][key];
  let min = array[0][key];
  for (let i = 1; i < array.length; i++) {
    if (array[i][key] > max) {
      max = array[i][key];
    }
    else if(array[i][key]< min){
      min = array[i][key];
    }
  }
  return {max,min};
}
const nestedArrayOfObjects = [
    {
      name: "Alice",
      age: 25,
    },
  {
      name: "Bob",
      age: 300,
    },
    {
      name: "Carol",
      age: 35,
    },
    {
      name: "Alice",
      age: 2,
    },
  ];
const {max, min} = findMaxNumber(nestedArrayOfObjects, "age");
console.log(max); //35
console.log(min);//25