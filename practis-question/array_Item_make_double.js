function double (x){
    return x * 2
}
const arr = [1, 2, 3, 4, 5, 6]
const returnData = arr.map(double)
console.log(returnData);


/// remove array item 
const list = ["a","b","f","d","e"];
console.log(list);
if(list.length > 1){
    // list.shift()
    // let newArra = list
    let newArra = list.slice(1);
    console.log(newArra, "in if");
}else{

    console.log(list, "out if");
}