function sockMerchant(n, ar) {
    // Write your code here
    const repeatedNum = ar.filter(num=>{
        return ar.indexOf(num) !== ar.lastIndexOf(num)
    })
    repeatedNum.sort((a,b)=>a-b)
    console.log(repeatedNum)
    
    const uniqueArray = []
    let count = 0
    let start = false
    for (let i = 0; i < repeatedNum.length; i++){
        for (let k = 0; k < uniqueArray.length; k++){
            if (repeatedNum[i] == uniqueArray[k]){
                start = true
            }
        }
        count ++
        if (count==1 && start === false){
            uniqueArray.push(repeatedNum[i])
        }
        start = false
        count = 0
    }
    
    let pair = 0
    let result = 0
    for (let i = 0; i < uniqueArray.length; i++) {
        for (let j = 0; j < repeatedNum.length; j++) {
            if (uniqueArray[i] === repeatedNum[j]){
                pair++
            }
        }
        pair = Math.floor(pair/2)
        result += pair 
        pair = 0
    }
    return result
    // time complexity : O(n^4)
    // Space complexity: O(1)
}
