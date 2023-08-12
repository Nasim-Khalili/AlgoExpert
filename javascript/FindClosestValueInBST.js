// Recursive JavaScript program to find key closest to k
// in given Binary Search Tree.

// A binary tree node has key, pointer to left child and a pointer to right child
// allocates a new node with given key and NULL left and right pointers.
class Node{
	constructor(key){
		this.key = key;
		this.left = null;
		this.right = null;
	}
}

let min_diff = Number.MAX_VALUE;
let min_diff_key = -1;

// Function to find node with minimum absolute
// difference with given K
// min_diff --> minimum difference till now
// min_diff_key --> node having minimum absolute
//				 difference with K
function maxDiffUtil(ptr, k){
	if(ptr == null) return;
	
	// if k itself is present
	if(ptr.key == k){
		min_diff_key = k;
		return;
	}
	
	// update min_diff and min_diff_key by checking
	// current node value
	if(min_diff > Math.abs(ptr.key - k)){
		min_diff = Math.abs(ptr.key - k);
		min_diff_key = ptr.key;
	}
	
	// if k is less than ptr->key then move in
	// left subtree else in right subtree
	if(k < ptr.key)
		maxDiffUtil(ptr.left, k);
	else
		maxDiffUtil(ptr.right, k);
}

// Wrapper over maxDiffUtil()
function maxDiff(root, k)
{
	// Find value of min_diff_key (Closest key
	// in tree with k)
	maxDiffUtil(root, k);
	return min_diff_key;
}

// Driver program to run the case
let root = new Node(9);
root.left = new Node(4);
root.right = new Node(17);
root.left.left = new Node(3);
root.left.right = new Node(6);
root.left.right.left = new Node(5);
root.left.right.right = new Node(7);
root.right.right = new Node(22);
root.right.right.left = new Node(20);
let k = 18;
console.log(maxDiff(root, k));
