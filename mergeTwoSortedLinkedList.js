function ListNode(val = 0, next = null) {
    this.val = val;
    this.next = next;
}

function createNewNode(a, i) {
    const b = new ListNode(i, a);
    return b;
}

let a = new ListNode();
let b = new ListNode();
for (let i = 5; i > 0; i--) {
    const c = createNewNode(a, i);
    const d = createNewNode(b, i);
    a = c;
    b = d;
}

function getTotalLength(a, b) {
    // Get maximum length of the linked list;
    let aLength = 0;
    let bLength = 0;
    let current = a;
    while (current !== null) {
        current = current.next;
        aLength++;
    }
    current = b;
    while (current !== null) {
        current = current.next;
        bLength++;
    }
    return bLength + aLength;
}

const mergeTwoLists = function (a, b) {
    let sortedList = new ListNode();
    let head = sortedList;
    const totalLen = getTotalLength(a, b);
    for (let i = 0; i < totalLen; i++) {
        if (!a || !b) {
            sortedList.next = a || b;
            continue;
        }
        if (a.val < b.val) {
            sortedList.next = new ListNode(a.val);
            a = a.next;
        } else {
            sortedList.next = new ListNode(b.val);
            b = b.next;
        }
        sortedList = sortedList.next;
    }
    return head.next;
};

// Can be done using while loop with condition a !== null & b!==null

mergeTwoLists(a, b)