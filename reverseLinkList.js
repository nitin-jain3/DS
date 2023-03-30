function Node(val = 0, next = null) {
    this.value = val;
    this.next = next;
}

let list = new Node(1);
for (let i = 2; i < 5; i++) {
    let d = new Node(i, list)
    list = d;
}

function reverseLinkList(list) {
    let array = [];
    while (list !== null) {
        array.push(list.value);
        list = list.next;
    }
    let reverseList = new Node(array[array.length - 1]);
    for (let i = array.length - 2; i >= 0; i-- ) {
        let d = new Node(array[i], reverseList);
        reverseList = d;
    }
    console.log(reverseList);
    return reverseList;
}

reverseLinkList(list);