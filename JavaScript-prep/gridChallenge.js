function gridChallenge(grid) {
    // Write your code here
    // const alphaLetters = "abcdefghijklmnopqrstuvwxyz"
    for (let i=0; i < grid.length; i++) {
        grid[i] = grid[i].split('').sort().join('')
    }
    for (let j=1; j < grid.length; j++) {
        for (let k=0; k < grid[j].length; k++) {
            if (grid[j].charCodeAt(k) < grid[j-1][grid[j].length-1]) return "NO"
        }
    }
    return "YES"
}

console.log(gridChallenge(['mpxz', 'abcd', 'wlmf']))