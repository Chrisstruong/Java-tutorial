// // function minimumBribes(q) {
// //     // Write your code here
// //     const TOO_CHAOTIC = "Too chaotic"
// //     let total = 0;
// //     for (let current_pos = 0; current_pos < q.length; current_pos++){
// //         const original_pos = q[current_pos] -1
// //         const diff = original_pos - current_pos
// //         if (diff > 2) return console.log(TOO_CHAOTIC)
// //         if (diff <= 0) {
// //             for (let i = Math.max(0, original_pos-1); i < current_pos; i++){
// //                 const start_pos_of_forward_person = q[i]-1
// //                 if (start_pos_of_forward_person > original_pos){
// //                     total++
// //                 }
// //             }
// //         }
// //     }
// //     console.log(total)

// // }

// function minimumBribes(q) {
//     let actualPosition
//     let indexOfBribedArray
//     let count = 0

//     for (let i=0; i < q.length; i++){
//         actualPosition = q[i]-1 //actuall position of element in non brised array
//         indexOfBribedArray = q.indexOf(q[i])
//         if (Math.abs(actualPosition-indexOfBribedArray) > 2) return "Too Chaotic"
//         for (let j=i+1; j < i+3; j++){
//             if (q[j]<q[i]) count++
//         }
//     }
//     return count

// }
// console.log(minimumBribes([2,1,5,3,4]))


