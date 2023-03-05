function palindromeIndex(s) {
    // Write your code here
    let result = -1;
    const slen = s.length

    if (slen >= 1 && slen <= 100005 & s!==s.split('').reverse().join('')){
        for (let i=0; i < slen; i++){
            if (s.charAt(i) != s.charAt(slen -1 -i)){
                let s1 = s.substring(0,i) + substring((i+1))
                let s2 = s.substring(0,(slen -1 -i)) +s.substring((len -1 -i) +1)
                if (s1 === s1.split('').reverse().join('')){
                    result = i
                } else if (s2 === s2.split('').reverse().join('')) {
                    result = slen - 1 -i
                }
                break
            }
        }
    }
    return result

}

console.log(palindromeIndex("abcd"))