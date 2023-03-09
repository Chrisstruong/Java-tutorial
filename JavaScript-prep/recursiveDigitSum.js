// // function superDigit(n, k) {
// //     // Write your code here
// //     let nLength = n.length
// //     let sum = 0
// //     for (let i=0; i < n.length; i ++){
// //         let median = parseInt(n[n.length+1/2])
// //         let num1 = parseInt(n[i])
// //         console.log(`num1 is ${num1}`)
// //         let num2 = parseInt(n[nLength-1-i])
// //         console.log(`num2 is ${num2}`)
// //         if (n.indexOf(num1)+1 === n.indexOf(num2)){
// //             sum+=num1+num2
// //             break
// //         } else if (n.indexOf(num1)+1 === (nLength+1)/2-1) {
// //             sum+=n[i+1]
// //             break
// //         } else {
// //             sum +=num1 + num2
// //         }
// //     }
// //     return sum
// // }


// // console.log(superDigit('98756'))

// // let num = '987578'
// // console.log(num.indexOf(5))

// function superDigit(n, k) {
//     // Write your code here
//     n = n.split("").reduce((a, b) => +a + +b) * k + "";
//     return (n.length > 1) ? superDigit(n, 1) : n.charAt(0);



//     // let tempN = 0
//     // let repN = n
//     // for (let i = 1; i <k; i++){
//     //     n+=repN
//     // }

//     // function recursion(digit) {
//     //     for (let j = 0; j < digit.length; j ++) {
//     //         tempN += parseInt(digit[j])
//     //     }
//     //     digit = tempN.toString()
//     //     tempN = 0
//     //     if (digit.length ===1 ){
//     //         return digit
//     //     } else {
//     //         return recursion(digit)
//     //     }

//     // }

//     // return parseInt(recursion(n))
    
// }

// console.log(superDigit('45634563456453643564356456435645',4))


function superDigit(n, k) {
    let arrayN = n.split('')
    // array of strings
    arrayN = arrayN.map(num=>{
        return parseInt(num)
    })
    console.log(arrayN)
    let sum = arrayN.reduce((accumulator, currentValue)=> {
        return accumulator + currentValue
    }, 0)
    
    sum = sum * k
    n = sum.toString()
    return n.length > 1 ?superDigit(n,1):n[0]
}


console.log(superDigit("148", 3))