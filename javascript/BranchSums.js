// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
    const sums = [];
    const stack = [{ node: root, runningSum: 0 }];
  
    while (stack.length > 0) {
      const { node, runningSum } = stack.pop();
  
      const newRunningSum = runningSum + node.value;
  
      if (!node.left && !node.right) {
        sums.push(newRunningSum);
        continue;
      }
  
      if (node.right) {
        stack.push({ node: node.right, runningSum: newRunningSum });
      }
  
      if (node.left) {
        stack.push({ node: node.left, runningSum: newRunningSum });
      }
    }
  
    return sums;
  }