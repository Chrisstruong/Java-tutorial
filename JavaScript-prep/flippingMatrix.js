function flippingMatrix(matrix) {
    let n=matrix.length, sum=0;
    for (let i=0; i<n/2; i++){
        for (let j=0; j<n/2; j++){
            let max=matrix[i][j];
            matrix[i].reverse();
            console.log(matrix)
            if (matrix[i][j]>max) max=matrix[i][j];
            matrix.reverse();
            console.log(matrix)

            if (matrix[i][j]>max) max=matrix[i][j];
            matrix[i].reverse();
            console.log(matrix)

            if (matrix[i][j]>max) max=matrix[i][j];
            sum+=max;
        }

    }
    return sum;
}

console.log(flippingMatrix([[1,2],[3,4]]))