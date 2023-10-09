var searchRange = function(nums, target) {
    let left = binarySearch(nums, target, true);
    let right = binarySearch(nums, target, false) - 1;
    
    if (left <= right && nums[left] === target && nums[right] === target) {
        return [left, right];
    }
    
    return [-1, -1];
};

function binarySearch(nums, target, isFirst) {
    let left = 0;
    let right = nums.length;
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > target || (isFirst && nums[mid] === target)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}

// Example usage
const nums1 = [5, 7, 7, 8, 8, 10];
const target1 = 8;
console.log(searchRange(nums1, target1));  // Output: [3, 4]

const nums2 = [5, 7, 7, 8, 8, 10];
const target2 = 6;
console.log(searchRange(nums2, target2));  // Output: [-1, -1]

const nums3 = [];
const target3 = 0;
console.log(searchRange(nums3, target3));  // Output: [-1, -1]
