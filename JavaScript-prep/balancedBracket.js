function isBalanced(s) {
    // Write your code here
    let condition = true
    function check(sequence) {
        if (sequence !== "") {
            if (sequence.includes("()")) {
                sequence = sequence.replace("()", "")
                check(sequence)
            } else if (sequence.includes("{}")) {
                sequence = sequence.replace("{}", "")
                check(sequence)
            } else if (sequence.includes("[]")) {
                sequence = sequence.replace("[]", "")
                check(sequence)
            } else {
                condition = false
            }
        } 
    }
    check(s)

    return condition ? "YES": "NO"
}

console.log(isBalanced("{[()]}"))
