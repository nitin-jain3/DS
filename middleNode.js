function Node(val = 0, next = null) {
    this.val = val;
    this.next = next;
}

let a = new Node();
for (let i = 1; i < 5; i++) {
    let d = new Node(i, a);
    a = d;
}

// Solution with using an array
function middleNode(a) {
    let arr = [];
    while (a!== null) {
        arr.push(a.val);
        a = a.next;
    }
    const postion = arr.length/2 - 1;
    let newNode = new Node(arr[arr.length-1]);
    for (let i = arr.length-2; i >= 0; i--) {
        if (i > postion) {
            let d = new Node(arr[i], newNode)
            newNode = d;
        }
    }
    return newNode;
};

middleNode(a)