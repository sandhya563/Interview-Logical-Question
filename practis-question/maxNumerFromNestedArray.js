///Finde max number from nested array
  // function findMaxInNestedArray(arr) {
  //   let maxNumber = arr[0][0];
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = 0; j < arr[i].length; j++) {
  //       if (arr[i][j] > maxNumber) {
  //         maxNumber = arr[i][j];
  //       }
  //     }
  //   }
  
  //   return maxNumber;
  // }
  // // Example usage:
  // const nestedArray = [
  //   [1, 2, 3],
  //   [4, 70, 6],
  //   [7, 8, 9]
  // ];
  // const maxNumber = findMaxInNestedArray(nestedArray);
  // console.log("The maximum number is:", maxNumber);


// Finde max or min number from nested array
  function findMinMax(nestedArray) {
    let max = nestedArray[0][0];
    let min = nestedArray[0][0];
    for (let i = 0; i < nestedArray.length; i++) {
        for (let j = 0; j < nestedArray[i].length; j++) {
            if (nestedArray[i][j] > max) {
                max = nestedArray[i][j];
            }
            else if (nestedArray[i][j] < min) {
                min = nestedArray[i][j];
            }
        }
    }
    return {max, min};
}
const nestedArray = [[1, 5, 3],[8, 2, 4],[7, 6, 9]];
const {max, min} = findMinMax(nestedArray);
console.log("Maximum value:", max);
console.log("Minimum value:", min);