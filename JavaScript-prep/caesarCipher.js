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

// function caesarCipher(s, k) {
//     // Write your code here
//     const lowerA = "abcdefghijklmnopqrstuvwyz"
//     const upperA = lowerA.toUpperCase()

//     const res = s.split('').map(c=>{
//         if (lowerA.includes(c)) {
//             return lowerA[(lowerA.indexOf(c)+k) % 26]
//         } else if (upperA.includes(c)){
//             return upperA[(upperA.indexOf(c)+k) % 26]
//         } else return c
//     })

//     return res.join("")
// }
// console.log(caesarCipher("abc", 1))

function caesarCipher(s, k) {
    // Write your code here
    // Description: There is a cycle from a - z. There is a "k" (rotation or increment). Basically given a string and then return the string with rotation. Only rotate with letters, not symbols.
    // Input: 
    // + n : length of given string
    // + s: the given string
    // + k: rotation
    // Output: RETURN a string with rotation.

    // Thinking: Use the charCodeAt to get the index of letters both lower and upper case. If the index is over the range afte the increment, set the index back to the beginning. 'z' + 1 =>a, 'y + 2 =>a not '{'
    // Steps:
    // 1) Loop through the string
    // 2) Determine whether each element in the string in range a-z or A-Z by setting condition
    // 3) After rotation, if it is over the range, set it back the beginning.
    // 4) RETURN the new string
    // let rotatedString = ""
    // for (let i = 0; i < s.length; s++) {
    //     // Set the element in range A-Z
    //     if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90 || s.charCodeAt(i) + k <= 90 + 26) {
    //         if (s.charCodeAt(i) + k > 90) {
    //             let temp = s.charCodeAt(i) + k - 26
    //             rotatedString += String.fromCharCode(temp)
    //             console.log(rotatedString)
    //         } else {
    //             let temp = s.charCodeAt(i) + k
    //             rotatedString += String.fromCharCode(temp)
    //             console.log(rotatedString)
    //         }
    //     }
    //     // Set the element in range a-z
    //     else if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122 || s.charCodeAt(i) + k <= 122 + 26) {
    //         if (s.charCodeAt(i) + k > 122) {
    //             let temp = s.charCodeAt(i) + k - 26
    //             rotatedString += String.fromCharCode(temp)
    //         } else {
    //             let temp = s.charCodeAt(i) + k
    //             rotatedString += String.fromCharCode(temp)
    //         }
    //     } else {
    //         rotatedString += s[i]
    //     }
    // }
    // return rotatedString

    let lowerString = "abcdefghijklmnopqrstuvwxyz"
    let upperString = lowerString.toUpperCase()
    s = s.split('')
    let rotatedString = ""
    for (let i=0; i < s.length; i++) {
        if (lowerString.includes(s[i])) {
            let rotatedIndex = (lowerString.indexOf(s[i]) + k) % 26
            console.log(rotatedIndex)
            rotatedString += lowerString[rotatedIndex]
        } else if (upperString.includes(s[i])) {
            let rotatedIndex = (upperString.indexOf(s[i]) + k) % 26
            rotatedString += upperString[rotatedIndex]
        } else rotatedString += s[i]
    }
    return rotatedString
}

console.log(caesarCipher('ABCz', 1))