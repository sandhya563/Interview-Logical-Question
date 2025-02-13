// in one loop 
function getRepeatChar(str) {
    let charCount = {};
    let repeatChar = {};

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
        if (charCount[char] === 2) {
            repeatChar[char] = 2;
        } else if (charCount[char] > 2) {
            repeatChar[char] = charCount[char];
        }
    }

    return repeatChar;
}
console.log(getRepeatChar('hello sandhya'));

// with two loops 
function getRepeatChar(str){
    let charCount = {};
    let repeatChar = {};
    for(let char of str){
        charCount[char] = (charCount[char] || 0) +1;
    }
    for(let char in charCount){
        if(charCount[char]> 1){
            repeatChar[char] = charCount[char];
        }
    }
    return repeatChar;
}
console.log(getRepeatChar('hello sandhya'));