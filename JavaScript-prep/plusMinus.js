// function plusMinus(arr) {
//     // Write your code here
//     let positive = 0;
//     let negative = 0;
//     let zero = 0;
//     for (let i=0; i < arr.length; i++){
//         if (arr[i] > 0) positive++
//         else if(arr[i] < 0) negative++
//         else zero++
//     }
//     postive = positive / arr.length
//     negative = negative / arr.length
//     zero = zero / arr.length
//     console.log(postive.toFixed(6))
//     console.log(negative.toFixed(6))
//     console.log(zero.toFixed(6))
// }

// plusMinus([1,1,0,-1,-1])

// const array = [9,5,3,1,8]
// console.log(array.sort())



function plusMinus(arr) {
    // Write your code here
    // 1) Create three variables to store positive, negative, and zero values by looping an array
    // 2) So as to get the ratio, take ratio = (postive||negative||zero) / the array length
    // 3) use "toFixed()" to get 6 digits after the decimal
    let positive = 0
    let negative = 0
    let zero = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) positive++
        else if(arr[i] < 0) negative++
        else zero++
    }
    
    let positiveRatio = (positive / arr.length).toFixed(6)
    let negativeRatio = (negative / arr.length).toFixed(6)
    let zeroRatio = (zero / arr.length).toFixed(6)
    console.log(positiveRatio)
    console.log(negativeRatio)
    console.log(zeroRatio)
}

let largest = -Number.MAX_VALUE;
console.log(largest)