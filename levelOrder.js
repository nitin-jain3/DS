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


const addNode = function(tree, levels, currentLevel) {
    if (tree === null) {
        return;
    }
    let { left, right} = tree;
    currentLevel += 1;
    if (left?.val || left?.val === 0) {
        if (!levels[currentLevel]) {
            levels[currentLevel] = [];
        }
        levels[currentLevel].push(left?.val);
    }
    if (right?.val || right?.val === 0) {
        if (!levels[currentLevel]) {
            levels[currentLevel] = [];
        }
        levels[currentLevel].push(right?.val);
    }
    addNode(left, levels, currentLevel);
    addNode(right, levels, currentLevel);
}

const levelOrder = function(root) {
    const levels = {};
    const currentLevel = 1;
    if (!root) {
        return Object.values(levels);
    }
    const { val = '' } = root;
    if (val || val === 0) {
        levels[currentLevel] = [val];
    }
    addNode(root, levels, currentLevel);
    return Object.values(levels);
};

levelOrder(root);