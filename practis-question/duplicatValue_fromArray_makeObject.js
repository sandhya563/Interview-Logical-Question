//{ '1': 2, '2': 2, '4': 1, '5': 1, '6': 1, '8': 2, '10': 1 } OUTPUT 
var arr = [1, 2, 2, 1, 10, 4, 6, 8, 8, 5]; // INPUT
function createObject(arr) {
    const newObj = {};
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (!newObj[item]) {
            newObj[item] = 1; 
        } else {
            newObj[item]++;
        }
    }
    return newObj;
}
const resultVlue = createObject(arr);
console.log(resultVlue);


