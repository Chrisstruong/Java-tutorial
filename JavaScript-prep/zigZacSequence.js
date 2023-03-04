function processData(input) {
    //Enter your code here
    const input2 = input.split(' ')

    for (let k =0; k<input2.length; k++){
        input2[k] = parseInt(input2[k])
    }

    input2.sort((a,b)=>a-b)
    let max = 0
    for (let i = 0; i < input2.length; i++) {
        if (max < input2[i]) max = input2[i]
    }
    let tempStore = input2[(input2.length+1)/2-1]
    input2[(input2.length+1)/2-1] = max
    input2[input2.length-1] = tempStore

    const arr2 = []
    for (let i=input2.indexOf(max)+1; i < input2.length ; i++) {
        arr2.push(input2[i])
    }
    arr2.sort((a,b)=>b-a)
    const arr1 = input2.slice(0, input2.indexOf(max)+1)
    const result = [...arr1, ...arr2].join(' ')
    return result    

}

console.log(processData("1 2 3 4 5 6 7"))