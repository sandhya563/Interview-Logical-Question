/// promies with settimeout
const newp1 = new Promise((resolve , resect)=>{
    setTimeout(()=>{
        resolve("sandhya")
    }, 3000)
})
const newp2 = new Promise((resolve , resect)=>{
    setTimeout(()=>{
        resolve("sandhya")
    }, 0)
})
async function handlePromise(){
    const val1 = await newp1
    console.log("hello goog morning");
    console.log(val1);

    const val2 = await newp2
    console.log("hello goog eveing");
    console.log(val2);
}
handlePromise()


/// Async function
// async function getData(){
//     newp2.then(data => console.log(data))
//     console.log("hell");
// }
// // first way to get promies
// getData()
// .then(data => console.log(data))

// // Second way to get promies
// const promiesData =  getData();
// promiesData.then(data =>{
//     console.log(data);
// })

