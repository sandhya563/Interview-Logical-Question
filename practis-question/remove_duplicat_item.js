// Remove duplicat item from array
function removeDuplicates(arr) {
    const uniqueArray = [];
    for (const item of arr) {
        // console.log(item)
      if (!uniqueArray.includes(item)) {
        uniqueArray.push(item);
      }
    }
    return uniqueArray;
  }
const myArray = [1, 2, 2, 3, 4, 4, 5];
const newArry = removeDuplicates(myArray);
console.log(newArry); // Output: [1, 2, 3, 4, 5]