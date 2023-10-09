// / Find duplicat item from array
function findDuplicates(arr) {
    const duplicates = [];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
          duplicates.push(arr[i]);
        }
      }
    }
    return duplicates;
  }
const myArray = [1, 2, 2, 3, 4, 4, 5];
const duplicateItems = findDuplicates(myArray);
console.log(duplicateItems); // Output: [2, 4]