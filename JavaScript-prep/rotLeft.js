function rotLeft(a, d) {
    // Write your code here
    let arr1 = a.slice(0, d);
    let arr2 = a.slice(d, a.length);
    arr2.push(...arr1)

    return arr2

}

console.log(rotLeft([1,2,3,4,5],1))