// function countingSort(arr) {
//     // Write your code here
//     let max = 0
//     for (let i = 0; i < arr.length; i++){
//         if (max < arr[i]) {
//             max = arr[i]
//         }
//     }
//     const arr2 = []
//     for (let k=0; k <= max; k++ ){
//         arr2.push(0)
//     }
//     const result = []
//     for (let j=0; j < arr2.length; j++){
//         arr2[j] = 0
//     }
//     for (let i=0; i < arr.length; i++){
//         // Have arr[i] to get the position of arr2
//             arr2[arr[i]] ++
//     }
//     return arr2

//     let max = Math.max(...arr)
//     let arr2 = new Array(max+1).fill(0)
//     for (let i=0; i < arr.length; i++){
//         // The number in arr represent the index of arr2
//         arr2[arr[i]]++
//     }
//     return arr2

    


//     // This is the goat
//     // for (let k=0; k < arr2.length; k++){
//     //     for (let g = 0; g < arr2[k]; g++){
//     //         result.push(k)
//     //     }
//     // }
//     // return result
    
// }

// console.log(countingSort([2,3,2,2,1,1,1,1]))

// // const array1 = [1, 2, 3, 4];
// // console.log(array1.fill(0))

// // const array2 = new Array(1,4)


function countingSort(arr) {
    // Write your code here
    // Description: Have an integer array whose index range covers the entire range of values in your array to sort. Each element represent the index of frequency array (to calculate how many time a number is repeated in the given array). After calculating, store each of them to frequency array
    // input: an intger array (frequencyArray)
    // output: RETURN a calculating repeated number array with 100 element in that array. Ex: [0,1,3,0,0,...0(index at 99)]
    
    // Thinking
    // I am about to loop through the given array. Each element of the array will represent the index of frequency array. Ex: given array = [1,2,1] => frequencyArray = [0,2,1,0,0,...0(index at 99)]
    // Steps:
    // 1) Loop the given array
    // 2) Each time a value occurs in the original array, increase the counter at the index in frequency array
    // 3) RETURN the frequency array
    
    
    const frequencyArray = new Array(100).fill(0)
    for (let i = 0; i < arr.length; i++) {
        frequencyArray[arr[i]] ++
    }
    return frequencyArray
    
    // Time complexity: O(n) as the runtime will increase when the length of given array increase
    // Space complexity: O(1) as the length is always 100
}