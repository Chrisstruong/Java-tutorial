
// function towerBreakers(n, m) {
//     // Write your code here
//     // Special cases
//     // 1. n=1
//     if (m==1 || n%2===0) {
//         return 2
//     } else {
//         return 1
//     }

// }

// console.log(String.fromCharCode(33))

function towerBreakers(n, m) {
    // Write your code here
    // Description: Get the winner. Each turn, players can reduce the current height of tower(x) to latest height (y) so that x % y ===0. n: is the number of tower, m is the height of every tower. Who can not make a move is a loser
    // Input: n (number of towers) and m (the height of every towers)
    // Output: RETURN player 1 or 2
    
    // Thinking:
    // There are one special case: when m = 1, so player 2 always wins. 
    // I focus on the player 1 to win since he goes first. If I can find any condition he can win, the player 2 will usually lose. This is how I find the optimal way for player 1. Otherwise, player 2 wins. This game is about conditions only. m is not important
    // Steps:
    // 1) Case m ===1 => player two wins
    // 2) case n = 1 && m > 1 => player 1 wins
    // 3) case n %2 === 0 && m > 1 => player 2 wins
    // 4) case n%2 !== 0 && m > 1 => player1 wins
    
    
    // Special cases
    
    // Player 1 wins conditions
    if (n%2 !== 0 && m>1) return 1
    
    // Player 2 wins conditions
    if (m===1 || n%2 ===0) return 2

}