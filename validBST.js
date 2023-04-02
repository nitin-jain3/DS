/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}
const root = new TreeNode(0);
root.left = new TreeNode(-1);


const maxValue = function (tree) {
    // using MIN_SAFE_INTEGER as MIN_VALUE is considerd greater than 0
    if (!tree) return Number.MIN_SAFE_INTEGER;
    let value = tree.val;
    let leftMax = maxValue(tree.left);
    let rightMax = maxValue(tree.right);
    return Math.max(value, Math.max(leftMax, rightMax));
}

const minValue = function (tree) {
    if (!tree) return Number.MAX_VALUE;
    let value = tree.val;
    let leftMin = minValue(tree.left);
    let rightMin = minValue(tree.right);
    return Math.min(value, Math.min(leftMin, rightMin));
}


const checkIfValidBST = function (tree, flag) {
    if (!tree) {
        return flag;
    }
    let { left, right, val } = tree;
    const valueCheck = val || val === 0;
    if (valueCheck && left && maxValue(left) >= val) {
        return flag = false;
    }
    if (valueCheck && right && minValue(right) <= val) {
        return flag = false;
    }
    const leftValue = checkIfValidBST(left, flag);
    const rightValue = checkIfValidBST(right, flag);
    return leftValue && rightValue;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function(root) {
    let flag = true;
    flag = checkIfValidBST(root, flag);
    console.log(flag);
    return flag;
};

isValidBST(root);