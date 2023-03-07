function diffence(k, arr) {
    let pair = 0
    for (let i =0; i < arr.length; i++) {
        for (let j=1; j < arr.length; j++){
            if (arr[i] - arr[j] === k) {
                pair++
            }
        }
    }
    return pair
}