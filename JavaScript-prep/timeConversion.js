function timeConversion(s) {
    let replicateS = ""
    let copyS = parseInt(s[0] + s[1])
    if (s[s.length-2] === 'P' && copyS!==12){
        copyS += 12
        replicateS += String(copyS) + s.slice(2,s.length-2);
        console.log(replicateS)
    } else if(s[s.length-2] === 'P' && copyS === 12){
        console.log(s.slice(0,s.length-2))
    } else if(s[s.length-2] === 'A' && copyS === 12){
        copyS = "00"
        replicateS += copyS + s.slice(2,s.length-2)
        console.log(replicateS)
    } else {
        console.log(s.slice(0,s.length-2))
    }

}

timeConversion("07:05:45PM")

function findMedian(arr) {
    // Write your code here
    const copyArr = arr.sort((a,b)=>a-b)
    let median = Math.ceil(copyArr.length/2)
    return copyArr[median-1]

}

console.log(findMedian([0,1,5,9,3]))
