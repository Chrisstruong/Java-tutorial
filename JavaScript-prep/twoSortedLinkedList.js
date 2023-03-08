function mergeLists(head1, head2) {
    let curr = new SinglyLinkedListNode()
    const dummy = curr
    while(head1&&head2) {
        if (head1.data < head2.data) {
            curr.next = head1
            head1 = head1.next
        } else {
            curr.next = head2
            head2 = head2.next
        }
        curr = curr.next
    }
    if (head1) {
        curr.next = head1
    } 
    if (head2) {
        curr.next = head2
    }
    console.log(JSON.stringify(dummy))
    return dummy.next

}

class Node {
    constructor(key) {
        this.key = key
        this.next = null
    }
}

function newNode(key){
    let temp = new Node(key)
    return temp
}

let a = newNode(5)
a.next = newNode(10)
a.next.next = newNode(15)
a.next.next.next = newNode(40)

let b = newNode(2)
b.next = newNode(3)
b.next.next = newNode(20)
let v = []
while (a !== null) {
    v.push(a.key)
    a = a.next
}

while (b !== null) {
    v.push(b.key)
    b = b.next
}
v.sort((a,b)=>a-b)
// console.log(v)

let result = newNode(-1)
let temp = result //when result get updated, temp also get updated

// store linkedlist to "result"
for (let i=0; i < v.length; i++){
    result.next = newNode(v[i])
    result = result.next
}

temp = temp.next
console.log(temp)
console.log(`Resultant Merge Linked List is: `)
while(temp!= null) {
    // console.log(temp.key + " ")
    temp = temp.next
}

// Space 0(1)
// time 0(m+n)



// function mergeLists(head1, head2) {
//     class Node {
//         constructor(key){
//             this.key = key
//             this.next = null
//         }
//     }
    
//     function newNode(key) {
//         let temp = new Node(key)
//         return temp
//     }
    
//     const v = []
//     while(head1 != null) {
//         v.push(head1.data)
//         head1 = head1.next
//     }
//     while(head2 != null) {
//         v.push(head2.data)
//         head2 = head2.next
//     }
//     v.sort((a,b)=>a-b)
//     console.log(v)
    
//     let result = newNode(-1)
//     let temp = result
    
//     for (let i=0; i < v.length; i++) {
//         result.next = newNode(v[i])
//         result = result.next
//     }
//     temp = temp.next
//     while(temp !=null) {
//         console.log(temp.key)
//         temp = temp.next
//     }

// }