function ListNode(val=0, next=null) {
    this.val = val;
    this.next = next;
}

function createNewNode(a, i) {
    let b = new ListNode(i , a);
    return b;
}

let a = new ListNode();

for (let i = 5; i > 0; i--) {
    const c = createNewNode(a, i);
    a = c;
}

console.log(a);