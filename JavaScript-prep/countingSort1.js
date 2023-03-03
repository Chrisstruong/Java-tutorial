function countingSort(arr) {
    // Write your code here
    let max = 0
    for (let i = 0; i < arr.length; i++){
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    const arr2 = []
    for (let k=0; k <= max; k++ ){
        arr2.push(0)
    }
    const result = []
    for (let j=0; j < arr2.length; j++){
        arr2[j] = 0
    }
    for (let i=0; i < arr.length; i++){
        // Have arr[i] to get the position of arr2
            arr2[arr[i]] ++
    }
    return arr2

    // let max = Math.max(...arr)
    // let arr2 = new Array(max+1).fill(0)
    // for (let i=0; i < arr.length; i++){
    //     // The number in arr represent the index of arr2
    //     arr2[arr[i]]++
    // }
    // return arr2

    


    // This is the goat
    // for (let k=0; k < arr2.length; k++){
    //     for (let g = 0; g < arr2[k]; g++){
    //         result.push(k)
    //     }
    // }
    // return result
    
}

console.log(countingSort([2,3,2,2,1,1,1,1]))

// const array1 = [1, 2, 3, 4];
// console.log(array1.fill(0))

// const array2 = new Array(1,4)
