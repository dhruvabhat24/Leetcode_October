/**

 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    // Find peak index using binary search
    let left = 0;
    let right = mountainArr.length() - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    let peakIndex = left;
    left = 0;
    right = peakIndex;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midValue = mountainArr.get(mid);
        if (midValue === target) {
            return mid;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    left = peakIndex;
    right = mountainArr.length() - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midValue = mountainArr.get(mid);
        if (midValue === target) {
            return mid;
        } else if (midValue < target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return -1;
};
