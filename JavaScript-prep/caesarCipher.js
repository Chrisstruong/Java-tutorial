// function caesarCipher(s, k) {
//     // Write your code here
//     // for (let i = 0; i < s.length; i++){
//     //     console.log()
//     // }
//     const array = s.split('')
//     // Switch ASCII letter to num
//     for (let i=0; i<array.length; i++){
//         array[i] = array[i].codePointAt(0) 
        
//     }
//     // Add conditions when to add k
//     for (let j=0; j<array.length; j++) {
//         if (array[j]>=97 && array[j]<=122) {
//             if (array[j] + k > 122) {
//                 array[j] +=k -26
//             } else {
//             array[j]+=k
//             }
//         } 
//         if (array[j]>=65 && array[j]<=90) {
//             if (array[j] + k > 90) {
//                 array[j]+=k -26
//             } else {
//             array[j]+=k
//             }
//         } 
        
//     }
//     // Switch ASCII num to letter
//     for (let k=0; k<array.length; k++){
//         array[k] = String.fromCharCode(array[k])
//     }
//     const result = array.join('')
//     return result


// }
// console.log(caesarCipher('w',5))

function caesarCipher(s, k) {
    // Write your code here
    const lowerA = "abcdefghijklmnopqrstuvwyz"
    const upperA = lowerA.toUpperCase()

    const res = s.split('').map(c=>{
        if (lowerA.includes(c)) {
            return lowerA[(lowerA.indexOf(c)+k) % 26]
        } else if (upperA.includes(c)){
            return upperA[(upperA.indexOf(c)+k) % 26]
        } else return c
    })

    return res.join("")
}
console.log(caesarCipher("abc", 1))