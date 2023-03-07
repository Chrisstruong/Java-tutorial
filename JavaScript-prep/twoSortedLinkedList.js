function mergeLists(head1, head2) {
    let curr = new SinglyLinkedListNode()
    const dummy = curr
    while (head1&&head2){
        if (head1.data < head2.data){
            curr.next = head1
            head1 = head1.next
        } else {
            curr.next = head2
            head2 = head2.next
        }
        curr = curr.next
        
    }
    if(head1) {
        curr.next = head1
    }
    if(head2) {
        curr.next = head2
    }
    console.log(dummy)
    return dummy.next

}