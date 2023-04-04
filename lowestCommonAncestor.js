/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);

root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);

// const findLca = function(tree, lca, p, q) {
//     const treeVal = tree?.val;
//     if (treeVal === p || treeVal === q) { 
//         console.log('Test1');
//         return lca = treeVal;
//     }
//     if (treeVal > p && treeVal < q) {
//         console.log('Test2');
//         return lca = treeVal;
//     }
//     if (p < treeVal && q < treeVal) {
//         console.log('Test3');
//         return findLca(tree.left, lca, p, q);
//     }
//     if (p > treeVal && q > treeVal) {
//         console.log('Test4');
//         return findLca(tree.right, lca, p, q);
//     }
// }

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// const lowestCommonAncestor = function(root, p, q) {
//     let tree = root;
//     let lca = null;
//     lca = findLca(tree, lca, p, q);
//     console.log(lca);
//     return lca;
// };

// const getPath = function (path, i, root) {
//     let tree = root;
//     const treeVal = tree?.val;
//     while (tree?.val !== i) {
//         path.push(tree?.val);
//         tree = treeVal > i ? tree.left: tree.right;
//     }
// }

// const lowestCommonAncestor = function (root, p, q) {
//     const pathP = [];
//     const pathQ = [];
//     getPath(pathP, p, root);
//     getPath(pathQ, q, root);
//     let lca = null;
//     for (let i = 0; i < pathP.length && i < pathQ.length; i++) {
//         if (pathP[i] === pathQ[i]) {
//             lca = pathP[i];
//         }
//     }
//     return lca;
// }

const lowestCommonAncestor = function(root, p, q) {
    const max = Math.max(p, q);
    const min = Math.min(p, q);
    while (root.val !== null) { 
        console.log(root.val)
        if (max < root.val) {
            root = root.left;
        } else if (min > root.val) {
            root = root.right;
        } else {
            return root;
        }
    }
};

const lca = lowestCommonAncestor(root, 2, 4);