function diagonalDifference(arr) {
    // Write your code here
    // Left to Right
    let sumLToR = 0;
    for (let i = 0; i < arr.length; i++){
        sumLToR+=arr[i][i]
    }
    let sumRToL = 0
    for (let j = 0; j < arr.length; j++){
        sumRToL+=arr[j][arr.length-1-j]
    }

    return Math.abs(sumLToR-sumRToL)

}

console.log(diagonalDifference([
    [3],
    [11,2,4],
    [4,5,6],
    [10,8,-12]
]))

// const array = [1,2,3,4,5]
// for (let i=array.length-1; i>=0; i--){
//     console.log(array[i])
// }