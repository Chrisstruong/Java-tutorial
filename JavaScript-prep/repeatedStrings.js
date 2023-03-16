function repeatedStrings(s,n){
    let sortedS = s.split('').sort().join('')
    let totalA = sortedS.lastIndexOf('a') +1

    let nModularLength = n % s.length
    let repeatedTimes = Math.floor(n/s.length)
    let leftAInModular = 0
    for (let i = 0; i < nModularLength; i++) {
        if (s[i] === 'a') leftAInModular++
    } 
    return (leftAInModular + repeatedTimes * totalA)
}

console.log(repeatedStrings("kmrebssvqdnktqadhyktagjxoanknhgilnm",7367))

