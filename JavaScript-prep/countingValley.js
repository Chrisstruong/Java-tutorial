function countingValleys(steps, path) {
    // Write your code here
    let currentValue = 0
    let checkingCondition = false
    let valley = 0
    const numArr = []
    for (let i = 0; i < steps.length; i++) {
        if (steps[i] === 'D') {
            numArr.push(-1)
        } else numArr.push(1)
    }

    for (let j = 0; j < numArr.length; j++) {
        currentValue += numArr[j]
        if (currentValue < 0) checkingCondition = true

        if (checkingCondition) {
            if (currentValue === 0) {
                valley++
                checkingCondition = false
            }
        }
    }

    return valley

}

console.log(countingValleys('DDUUDDDUDUUDUDDDUUDDUDDDUDDDUDUUDDUUDDDUDDDUDDDUUUDUDDDUDUDUDUUDDUDUDUDUDUUUUDDUDDUUDUUDUUDUUUUUUUUU', 8))