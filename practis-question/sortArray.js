function arrayShort(){
    const n = arry.length;
    for(let i = 0; i< n-1; i++){
        for(let j = 0; j < n-i-1; j++){
            if(arry[j] > arry[j +1]){
                const newValue = arry[j];
                arry[j] = arry[j + 1];
                arry[j + 1] = newValue;
            }
        }
    }
    return arry
    }
    var arry = [1,2,2,1,10,4,6,8,8,5];
    const sortedArray = arrayShort(arry);
    console.log("This is our sort array",sortedArray); 

   