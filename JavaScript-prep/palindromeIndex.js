// function palindromeIndex(s) {
// // Write your code here
// let result = -1;
// const slen = s.length

// if (slen >= 1 && slen <= 100005 & s!==s.split('').reverse().join('')){
//     for (let i=0; i < slen; i++){
//         if (s.charAt(i) != s.charAt(slen -1 -i)){
//             let s1 = s.substring(0,i) + s.substring((i+1))
//             let s2 = s.substring(0,(slen -1 -i)) +s.substring((slen -1 -i) +1)
//             if (s1 === s1.split('').reverse().join('')){
//                 result = i
//             } else if (s2 === s2.split('').reverse().join('')) {
//                 result = slen - 1 -i
//             }
//             break
//         }
//     }
// }
// return result

// }

// console.log(palindromeIndex("abcdeqwerdf"))

function palindromeIndex(s) {
    // Write your code here
    // Description: given a string of lowercase letters. Determine whether a string is palindrome. If its already palindrome or no solution, return -1. Otherwise, return the index
    // Input: 
    // + q: number of test cases
    // + s: a string
    // Output: RETURN the index to remove or -1

    // Thiking:
    // The palindrome is the string has the same forward and backward order. "313" -> "313"
    // So I loop the string and check each element forward and backward. Use sub-string to remove the element while looping. If one of the two cases succeed, return the index immediately.
    // If no solution or already a index return -1
    // Steps:
    // 1) Check the backward of the string. If they are the same, return -1
    // 2) Looping through the array to check each element. Check forward and backward.
    // 3) Return if removing a char to make the string palindrome. Otherwise return -1

    let reversedString = s.split('').reverse().join('')
    if (s === reversedString) return -1

    let forwardString, backwardString

    for (let i = 0; i < s.length; i++) {
        // Doing forward track
        if (s.charAt(i) !== s.charAt(s.length - 1 - i)) {
            forwardString = s.substring(0, i) + s.substring(i + 1)
            let reversedForwardString = forwardString.split('').reverse().join('')
            if (forwardString === reversedForwardString) return i
            // Doing backward track
            backwardString = reversedString.substring(0, i) + reversedString.substring(i + 1)
            let reversedBackwardString = backwardString.split('').reverse().join('')
            if (backwardString === reversedBackwardString) return (s.length - 1 - i)

        }
    }
    return -1

    // Time complexity: O(n) as the runtime depends on the input length
    // Space complexity: O(1) as return only a index or -1

}

console.log(palindromeIndex('bcbc'))

// const string = "abcd"
// const string2 = string.split('').reverse().join('')
// console.log(string.substring(0,1)+string.substring(1+1))
// console.log(string2.substring(0,1)+string2.substring(1+1))