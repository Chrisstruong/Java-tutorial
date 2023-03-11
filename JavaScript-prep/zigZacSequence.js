// function processData(input) {
//     //Enter your code here
//     const input2 = input.split(' ')

//     for (let k =0; k<input2.length; k++){
//         input2[k] = parseInt(input2[k])
//     }

//     input2.sort((a,b)=>a-b)
//     let max = 0
//     for (let i = 0; i < input2.length; i++) {
//         if (max < input2[i]) max = input2[i]
//     }
//     let tempStore = input2[(input2.length+1)/2-1]
//     input2[(input2.length+1)/2-1] = max
//     input2[input2.length-1] = tempStore

//     const arr2 = []
//     for (let i=input2.indexOf(max)+1; i < input2.length ; i++) {
//         arr2.push(input2[i])
//     }
//     arr2.sort((a,b)=>b-a)
//     const arr1 = input2.slice(0, input2.indexOf(max)+1)
//     const result = [...arr1, ...arr2].join(' ')
//     return result    

// }

// function processData(input) {
//     const arr = input.slice(4, input.length).split(" ")
//     const middle = (arr.length-1)/2
//     const sorted = arr.sort((a,b)=>a-b)
//     const max = sorted[sorted.length-1]
    
//     const result = [...sorted.slice(0, middle), max, ...sorted.slice( middle, sorted.length-1).reverse()]
//     process.stdout.write(result.join(" "))
// }

// console.log(processData("1 2 3 4 5 6 7"))

// console.log(5%1)

// const arr = ['a', 'b', 'e', 'd']
// arr.sort((a,b)=>b-a)
// console.log(arr)

// function processData(input) {
//     //Enter your code here
//     input.sort((a,b)=> a-b)
//     let median = (input.length+1)/2 -1
//     const input2 = input.slice(0,median)
//     const input3 = input.slice(median, input.length)
//     input3.sort((a,b)=>b-a)
//     const result = [...input2, ...input3]
//     return result
// }

// console.log(processData([2,3,5,1,10,123,543]))

// const arr = [1,2,3,4,5]
// const arr2 = arr.splice(0,1)
// console.log(arr)

// // Whenever splice is called, the element of the array will be gone forever.


console.log(0%3)

function deviceNamesSystem(devicenames) {
    // Write your code here
    // Description: given an array with strings. If there are any same names, add 1 to n at the end of the repeated strings. Start at 1 to n to make that item unique
    // the most important inputs:
    // + devicenames: array of stirngs
    // output: an array of unique strings
    
    // Thinking
    // + Let the n = the length of the array because the number at the end can not over the length. Declare an array that store the first appeared strings. ['switch', 'tv]. Then count how many times the string repeated and then add num at the end
    // Steps:
    // 1) Declare n
    // 2) Loop through an array to find unique strings
    
    let firstAppearedArray = 0

    console.log(firstAppearedArray)
    // for (let i = 0; i < firstAppearedArray.length; i++) {
    //     let n = 0
    //     for (let j = 0; j < devicenames.length; j++) {
    //         if (devicenames[j] === firstAppearedArray[i]) {
    //             devicenames[j] += `${n}`
    //             n++
    //         }
            
    //     }
    // }
    console.log(devicenames.slice(0,devicenames.e))
    

}

deviceNamesSystem(['mixer','mixer'])