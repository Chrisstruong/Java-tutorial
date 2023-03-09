// function gridChallenge(grid) {
//     // Write your code here
//     // const alphaLetters = "abcdefghijklmnopqrstuvwxyz"

//     // for (let i=0; i < grid.length; i++) {
//     //     grid[i] = grid[i].split('').sort().join('')
//     // }
//     // console.log(grid)
//     // for (let j=1; j < grid.length; j++) {
//     //     for (let k=0; k < grid[j].length; k++) {
//     //         console.log(grid[j].charCodeAt(k))
//     //         console.log(grid[j-1][grid[j].length-1])
//     //         if (grid[j].charCodeAt(k) < grid[j-1].charCodeAt(grid[j].length-1)) return "NO"
//     //     }
//     // }
//     // return "YES"

//     for (let i=0; i < grid.length; i++) {
//         grid[i] = grid[i].split('').sort().join('')
//     }
//     console.log(grid)
    
//     for (let k = 0; k < grid.length; k++){
//         for (let j = 1; j < grid.length; j ++){
//             let tempNum = grid[j-1].charCodeAt(k)
//             if (tempNum > grid[j].charCodeAt(k)) return "NO"
//         }
//     }
//     return "YES"
// }

// console.log(gridChallenge(['kc', 'iu']))

// SORT is FOR ARRRAYYYYYYYY ARRRAAYAYYYY ARRAAYYYY

function gridChallenge(grid) {
    // Write your code here
    // Description: Given an array of strings. Sort the rows, then checks the columns whether alphabetically or not.
    // Input: 
    // + grid: array of strings
    // output: RETUN "YES" if the column has alphabetical letters. Otherwise, RETURN "NO"
    // Thinking:
    // I need to sort the rows to get assending order. Then check the columns
    // Steps: 
    // 1) loop an through to implement each string. Sort the string
    // 2) Loop again to check the columns

    for (let i = 0; i < grid.length; i++){
        grid[i] = grid[i].split('').sort().join('')
    }

    for (let row=0; row < grid.length; row++) {
        for (let column = 1; column < grid.length; column++) {
            let temp1 = grid[column-1].charCodeAt(row)
            let temp2 = grid[column].charCodeAt(row)
            if (temp2 < temp1) return "NO"
        }
    }
    return "YES"
    

}
console.log(gridChallenge([
'eabcd', 
'fghij',
'olkmn', 
'trpqs', 
'xywuv']))


const array = ['d', 'e', 'a', 'b']
array.sort((a,b)=>a-b)
console.log(array)