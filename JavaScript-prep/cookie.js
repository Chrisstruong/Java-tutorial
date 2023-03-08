function cookies(k, A) {
    A.sort((a,b)=>a-b)

    if(A[0] >= k) return 0

    let iteration = 0
    A.sort((a,b)=>a-b)
    let sweetness = A[0]+ A[1]*2
    while (A[0] < k) {
        if (A.length === 1 && A[0] < k) return -1
        A = A.slice(2)
        A.push(sweetness)
        A.sort((a,b)=>a-b)
        sweetness = A[0]+ A[1]*2
        iteration++
    } 
    return iteration

}



console.log(cookies(10, [1,1,1]))

// let array = [1,2,3,4,5,6]
// array = array.slice(2)
// console.log(array)