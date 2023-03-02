function lonelyinteger(a) {
    // Write your code here
    let unique = a.filter((value)=>{return a.indexOf(value) === a.lastIndexOf(value)})
    return unique

}

console.log(lonelyinteger([1]))

