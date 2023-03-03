function countingSort(arr) {
    // Write your code here
    const arr2 = [0, ...arr]
    for (let j=0; j < arr2.length; j++){
        arr2[j] = 0
    }
    for (let i=0; i < arr.length; i++){
            arr2[arr[i]] ++
    }
    arr2.splice(arr2.length-1,1)
    return arr2
    
}

console.log(countingSort([1,4,1,2,7,5,2]))