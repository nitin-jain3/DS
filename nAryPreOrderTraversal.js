/* n-ary example tree
example of input :- 
{
    val: 1,
    children: [
      { val: 3, children: [ { val: 5, children: [] }, { val: 6, children: [] }] },
      { val: 2, children: [] },
      { val: 4, children: [] }
    ]
  }
*/

const tree = {
    val: 1,
    children: [
      { val: 3, children: [ { val: 5, children: [] }, { val: 0, children: [] }] },
      { val: 2, children: [] },
      { val: 4, children: [] }
    ]
}

const addNodes = function(children, nodes) {
    children.forEach(child => {
        const { children = [], val = '' } = child;
        if (val || val === 0) {
            nodes.push(val);
        }
        addNodes(children, nodes)
    });
}

const preorder = function(tree) {
    const nodes = [];
    if (!tree) {
        return nodes;
    }
    const { children, val = '' } = tree
    if (val || val === 0) {
        nodes.push(val);
    }
    addNodes(children, nodes);
    console.log(nodes);
    return nodes;
};

preorder(tree);