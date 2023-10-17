/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
    const inDegree = new Array(n).fill(0);
    
    for (let i = 0; i < n; i++) {
        if (leftChild[i] !== -1) {
            inDegree[leftChild[i]]++;
            if (inDegree[leftChild[i]] > 1) {
                return false;
            }
        }
        if (rightChild[i] !== -1) {
            inDegree[rightChild[i]]++;
            if (inDegree[rightChild[i]] > 1) {
                return false;
            }
        }
    }
    
    let rootCount = 0;
    for (let i = 0; i < n; i++) {
        if (inDegree[i] === 0) {
            rootCount++;
            if (rootCount > 1) {
                return false;
            }
        }
    }
    
    // Check for a single root node.
    if (rootCount !== 1) {
        return false;
    }
    
    // Check for acyclic graph (no cycles).
    const visited = new Array(n).fill(false);
    const stack = [inDegree.indexOf(0)]; // Start from the root node.
    
    while (stack.length > 0) {
        const node = stack.pop();
        if (visited[node]) {
            return false; // Cycle detected.
        }
        visited[node] = true;
        
        if (leftChild[node] !== -1) {
            stack.push(leftChild[node]);
        }
        if (rightChild[node] !== -1) {
            stack.push(rightChild[node]);
        }
    }
    
    return visited.every((visitedNode) => visitedNode === true);
};
