// sort array base on array length of item
// output [ 'a', 'bet', 'kiwi', 'apple', 'grape', 'banana', 'pineapple' ]
const array = ["apple", "kiwi", "banana", "grape", "pineapple", "bet", "a"];

for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j].length > array[j + 1].length) {
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
    }
}
console.log("Sorted array:", array);
 

