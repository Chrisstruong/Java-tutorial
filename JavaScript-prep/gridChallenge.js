function gridChallenge(grid) {
    // Write your code here
    // const alphaLetters = "abcdefghijklmnopqrstuvwxyz"

    // for (let i=0; i < grid.length; i++) {
    //     grid[i] = grid[i].split('').sort().join('')
    // }
    // console.log(grid)
    // for (let j=1; j < grid.length; j++) {
    //     for (let k=0; k < grid[j].length; k++) {
    //         console.log(grid[j].charCodeAt(k))
    //         console.log(grid[j-1][grid[j].length-1])
    //         if (grid[j].charCodeAt(k) < grid[j-1].charCodeAt(grid[j].length-1)) return "NO"
    //     }
    // }
    // return "YES"

    for (let i=0; i < grid.length; i++) {
        grid[i] = grid[i].split('').sort().join('')
    }
    console.log(grid)
    
    for (let k = 0; k < grid.length; k++){
        for (let j = 1; j < grid.length; j ++){
            let tempNum = grid[j-1].charCodeAt(k)
            if (tempNum > grid[j].charCodeAt(k)) return "NO"
        }
    }
    return "YES"
}

console.log(gridChallenge(['kc', 'iu']))