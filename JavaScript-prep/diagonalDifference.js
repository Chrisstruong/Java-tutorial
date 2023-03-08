// function diagonalDifference(arr) {
//     // Write your code here
//     // Left to Right
//     let sumLToR = 0;
//     for (let i = 0; i < arr.length; i++){
//         sumLToR+=arr[i][i]
//     }
//     let sumRToL = 0
//     for (let j = 0; j < arr.length; j++){
//         sumRToL+=arr[j][arr.length-1-j]
//     }

//     return Math.abs(sumLToR-sumRToL)

// }

// console.log(diagonalDifference([
//     [3],
//     [11,2,4],
//     [4,5,6],
//     [10,8,-12]
// ]))

// // const array = [1,2,3,4,5]
// // for (let i=array.length-1; i>=0; i--){
// //     console.log(array[i])
// // }


function diagonalDifference(arr) {
    // Write your code here
    // Purpose: Calculate the ABSOLUTE difference between the sums of its diagonals.
    // input: 1) n (number of rows and columns), 2)Multi-dimensional array (arr[i][j])
    // output: RETURN an int of ABS diff
    
    // Thinking: I will calculate left to right diagonals and the right to left. Then take the two sums minus each other in Math.abs()
    // Steps:
    // 1) Use for loop to go through multi-dimensional array
    let LToRSum = 0
    let RToLSum = 0
    // 2) Calculate Left to right Diagonal
    // 3) Calculate Right to Left Diagonal
    for (let i=0; i < arr.length; i++) {
        LToRSum += arr[i][i]
        RToLSum += arr[arr.length-1-i][i]
    }
    // 4) Return the ABS diff. 
    return Math.abs(LToRSum-RToLSum)//or return Math.abs(RToLSum-LToRSum)
    // Time complexity: O(n) as the runtime depends on the length of "arr"
    // Space complexity: O(n) as the amount of memory used increase by the elements in an array
}