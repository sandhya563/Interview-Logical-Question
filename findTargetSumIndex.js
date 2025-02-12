// Finding pairs of index that indices that sum to target numner
// out = [ [ 0, 3 ], [ 0, 7 ], [ 2, 3 ], [ 2, 7 ] ]
let array = [2,7,2,3,1,6,0,3,4]
let target = 5;
let indexPairs = [];
for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
        if(array[i] + array[j] === target){
            indexPairs.push([i, j]);
        }
    }
}
 console.log("indexPairs", indexPairs);
 