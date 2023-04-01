/*
  Definition for a binary tree node.
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
*/

function TreeNode(val = null, left = null, right  = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.right = new TreeNode(5);


const addNode = function(tree, nodes) {
    if (tree === null) {
        return;
    }
    let { left, right} = tree;
    const arr = [];
    if (left?.val || left?.val === 0) {
        arr.push(left?.val);
    }
    if (right?.val || right?.val === 0) {
        arr.push(right?.val);
    }
    if (arr.length) {
        nodes.push(arr);
    }
    addNode(left, nodes);
    addNode(right, nodes);
}

const pairOfChilds = function(root) {
    console.log(root);
    const nodes = [];
    if (!root) {
        return nodes;
    }
    const { val = '' } = root;
    if (val || val === 0) {
        nodes.push([val]);
    }
    addNode(root, nodes);
    console.log(nodes);
    return nodes;
};

pairOfChilds(root);