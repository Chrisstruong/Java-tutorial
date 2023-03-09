// function flippingMatrix(matrix) {
//     let n=matrix.length, sum=0;
//     for (let i=0; i<n/2; i++){
//         for (let j=0; j<n/2; j++){
//             let max=matrix[i][j];
//             matrix[i].reverse();
//             console.log(matrix)
//             if (matrix[i][j]>max) max=matrix[i][j];
//             matrix.reverse();
//             console.log(matrix)

//             if (matrix[i][j]>max) max=matrix[i][j];
//             matrix[i].reverse();
//             console.log(matrix)

//             if (matrix[i][j]>max) max=matrix[i][j];
//             sum+=max;
//         }

//     }
//     return sum;
// }

// console.log(flippingMatrix([[1,2],[3,4]]))


function flippingMatrix(matrix) {
    // Write your code here
    // console.log(matrix.length)
    let lengthSplit = matrix.length / 2

    let fullLength = matrix.length - 1

    let arrMirrorNumber = []

    let sum = 0

    for (let i = 0; i < lengthSplit; i++) {
        for (let j = 0; j < lengthSplit; j++) {
            let a1 = matrix[i][j]
            let a2 = matrix[fullLength - i][j]

            let a3 = matrix[i][fullLength - j]
            let a4 = matrix[fullLength - i][fullLength - j]

            let max = Math.max(a1,a2,a3,a4)
            
            sum+=max
        }
    }
    return sum


}

let input1 = [
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108]
]

let input2 = [
    [1, 2],
    [3, 4]
]

let input3 = [
    [112, 42, 83, 119, 234, 120],
    [56, 125, 57, 49, 12, 81],
    [15, 78, 101, 43, 113, 41],
    [62, 98, 114, 108, 43, 21],
    [523, 152, 112, 145, 7, 22],
    [210, 76, 242, 41, 80, 11]
]

flippingMatrix(input1)