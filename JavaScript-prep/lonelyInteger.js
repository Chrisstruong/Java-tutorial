// function lonelyinteger(a) {
//     // Write your code here
//     let unique = a.filter((value)=>{return a.indexOf(value) === a.lastIndexOf(value)})
//     return unique

// }

// console.log(lonelyinteger([1]))

function lonelyinteger(a) {
    // Write your code here
    // Purpose: Find the unique integer in an array. Guarante only one unique integer
    // Input: importantly the array (a)
    // Output: RETURN the unique number

    // My Thinking:
    // From the description, every number, excludesively the unique number, repeats two times maximumly. That is to say, use "indexOf" to find the first and "lastIndexOf" to find the last
    // The unique num will have the same index of the first and the last.

    // Steps to do:
    // 1) Use filter to loop through arrray. The condition will be indexOf(element) === lastIndexOf(element)
     const result = a.filter((element) =>{
        return a.indexOf(element) === a.lastIndexOf(element)
    } )
    // 2) Since filter will return an array and there is only one unique number => Return the element in index 0
    return result[0]
    // Time complexity: O(n) since runtime will depend on the length of array
    // Space complexity: O(1) since will return only one element 
}