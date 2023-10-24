var largestValues = function(root) {
    let result = [];
    let max = Number.MIN_SAFE_INTEGER;
    let currentLevelNodes = [];
    if (!root) {
        return result;
    }
    currentLevelNodes.push(root);
    
    while(currentLevelNodes.length > 0) {
        let len = currentLevelNodes.length;
        for (let i = 0; i < len; i++) {
            let node = currentLevelNodes.shift();
            max = node.val > max ? node.val : max;            
            if(node.left) {
                currentLevelNodes.push(node.left);
            }
            if(node.right) {
                currentLevelNodes.push(node.right);
            }
        }
        result.push(max);
        max = Number.MIN_SAFE_INTEGER;
    }
    
    return result;
};
