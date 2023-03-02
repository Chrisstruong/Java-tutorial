function miniMaxSum(arr) {
    // Write your code here
    arr.sort();
    let minSum = 0;
    let maxSum = 0;
    for (let i = 0; i < arr.length-1; i++){
        minSum +=arr[i]
    }
    for (let j = 1; j < arr.length; j++){
        maxSum += arr[j]
    }
    console.log(`${minSum} ${maxSum}`)

}

miniMaxSum([1,3,5,7,9])