/// FIND DUPLICATE VALUE FROM ARRAY OF OBJECT
// const user = [{ firstName: "sandhya", lastName: "shakya", age: 20 },
// { firstName: "sandy", lastName: "bauddha", age: 30 },
// { firstName: "andy", lastName: "Patel", age: 10 },
// { firstName: "ajay", lastName: "Sharma", age: 50 }]
// const data = user.reduce(function(index, item){
//     if(index[item.age]){
//         index[item.age] = index[item.age] + index[item.age]
//     }else{
//         index[item.age] = 1
//     }
//     return index
// },{})
// console.log(data);

// const value = user.filter(x => x.age < 30)
// .map(x => x.firstName)
// console.log(value);


/// FIND SECOND MIN OR SECOND MAX NUMBER FROM ARRAY
function findSecondMinMax(arr) {
    if (arr.length === 0 || arr.length < 2) {
      return "Array is too small to find second min and max.";
    }
    let min = numbers[0];
    let secondMin = numbers[1];
    let max = numbers[0];
    let secondMax = numbers[1];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        secondMin = min;
        min = arr[i];
      } else if (arr[i] < secondMin && arr[i] !== min) {
        secondMin = arr[i];
      }
  
      if (arr[i] > max) {
        secondMax = max;
        max = arr[i];
      } else if (arr[i] > secondMax && arr[i] !== max) {
        secondMax = arr[i];
      }
    }
    return {
      secondMin: secondMin,
      secondMax: secondMax,
    };
  }
  const numbers = [12, 45, 1, 67, 34, 8, 3, 90, 23];
  const result = findSecondMinMax(numbers);
  console.log("Second Minimum:", result.secondMin);
  console.log("Second Maximum:", result.secondMax);
  
  
  
  
  
  