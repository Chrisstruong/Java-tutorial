// function miniMaxSum(arr) {
//     // Write your code here
//     arr.sort();
//     let minSum = 0;
//     let maxSum = 0;
//     for (let i = 0; i < arr.length-1; i++){
//         minSum +=arr[i]
//     }
//     for (let j = 1; j < arr.length; j++){
//         maxSum += arr[j]
//     }
//     console.log(`${minSum} ${maxSum}`)

// }

// miniMaxSum([1,3,5,7,9])

function miniMaxSum(arr) {
    // Write your code here
    
    // Input: the length of array is 5 and contains 1 integer for each index
    // Output: console.log two outputs: minSum and maxSum
    
    // Steps to do:
    // 1) Sort "arr" to assending order
    // 2) Calculating minSum from index 0 to 3
    // 3) Calculating maxSum from index 1 to 4
    
    arr.sort((a,b)=>a-b)
    let minSum = 0, maxSum = 0
    for (let i = 0; i <arr.length-1; i++) {
        minSum+=arr[i]
        maxSum+=arr[arr.length-1-i]//Calculating backward for max sum
    }
    console.log(minSum, maxSum)
    // Time complexity: O(1) since the length of input is always 5
    // Space complexity: O(1) since the length of input is always 5
    

}