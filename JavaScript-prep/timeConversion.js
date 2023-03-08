// function timeConversion(s) {
//     let replicateS = ""
//     let copyS = parseInt(s[0] + s[1])
//     if (s[s.length-2] === 'P' && copyS!==12){
//         copyS += 12
//         replicateS += String(copyS) + s.slice(2,s.length-2);
//         console.log(replicateS)
//     } else if(s[s.length-2] === 'P' && copyS === 12){
//         console.log(s.slice(0,s.length-2))
//     } else if(s[s.length-2] === 'A' && copyS === 12){
//         copyS = "00"
//         replicateS += copyS + s.slice(2,s.length-2)
//         console.log(replicateS)
//     } else {
//         console.log(s.slice(0,s.length-2))
//     }

// }

// timeConversion("07:05:45PM")

// function findMedian(arr) {
//     // Write your code here
//     const copyArr = arr.sort((a,b)=>a-b)
//     let median = Math.ceil(copyArr.length/2)
//     return copyArr[median-1]

// }

// console.log(findMedian([0,1,5,9,3]))

function timeConversion(s) {
    // Purpose: to convert AM/PM to 24h time
    // Logic: Focus on the hour and AM or PM. These are the most important
    // Input: A string("") with the length of 10
    // Output: a string in 24h time format
    
    // Steps:
    // Format end with AM
    // 1) Have condition for AM when the hour is === 12 => hour = "00"
    // Format end with PM
    // 2) Have condition for PM when the hour is < 12 => switch string of hour to integer, then have it plused 12. Ex: 01:00:00PM => 13:00:00PM
    
    // Solution
    let hour = s[0]+s[1]
    if (s[s.length-2] === "A" && hour === "12") {
        s = s.slice(2,s.length-2)
        s = "00" + s
    } else if(s[s.length-2] === "A") {
        s = s.slice(0,s.length-2)
    } else if(s[s.length-2] ==="P" && parseInt(hour)<12) {
        hour = parseInt(hour) +12
        hour = hour.toString()
        s = s.slice(2,s.length-2)
        s = hour + s
    } else {
        s = s.slice(0, s.length-2)
    }
    return s

}

console.log(timeConversion("07:01:00PM"))