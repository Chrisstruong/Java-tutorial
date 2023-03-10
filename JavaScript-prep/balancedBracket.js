// function isBalanced(s) {
//     // Write your code here
//     let condition = true
//     function check(sequence) {
//         if (sequence !== "") {
//             if (sequence.includes("()")) {
//                 sequence = sequence.replace("()", "")
//                 check(sequence)
//             } else if (sequence.includes("{}")) {
//                 sequence = sequence.replace("{}", "")
//                 check(sequence)
//             } else if (sequence.includes("[]")) {
//                 sequence = sequence.replace("[]", "")
//                 check(sequence)
//             } else {
//                 condition = false
//             }
//         } 
//     }
//     check(s)

//     return condition ? "YES": "NO"
// }

// console.log(isBalanced("{[()]}"))


function isBalanced(s) {
    // Write your code here

    // Description: Check the string if it has open and closing brackets properly. '(' and ')', '{' and '}', '[' and ']'.
    // Most important inputs: 
    // + s: string
    // Output: "YES" if the stirng is balanced brackets, Otherwise, "NO"

    // Thinking
    // Use include method to check whether the string has "()", "{}", "[]". Then remove it until the string is " if the string has balanced bracket. If not return "NO" if one of those rounds is not able to run
    // Steps
    // 1) set condition for s. s!=="" because if s = "", it is already an balanced bracket string
    // 2) If the string is not balanced bracket yet. Check at the begining to the end whether it has "()", "{}", "[]" and use replace method to remove items gradually. If the s !== "" && one of those round is not successful. Return "NO". Otherwise, let the string go until emty and then return "YES"
    let condition = true // assume the string has balanced brackets. If one of the conditions is false, set it to false so
    function conditionIsBalanced(s) {
        if (s !== "") {
            // Use recursion to keep the checking going until it is "" or check if it is not a balanced brackets
            if (s.includes("()")) {
                s = s.replace("()", "")
                conditionIsBalanced(s)
            } else if (s.includes("{}")) {
                s = s.replace("{}", "")
                conditionIsBalanced(s)
            } else if (s.includes("[]")) {
                s = s.replace("[]", "")
                conditionIsBalanced(s)
            } else {
                condition = false
                return
            }
        }
    }
    conditionIsBalanced(s)
    if (condition) return "YES"
    else return "NO"
    // Time complexity: O(n) as the runtime is proportional with length of input
    // Space complexity: O(1) as the return is always "YES" or "No"
}

console.log(isBalanced("()()()()[][]"))
