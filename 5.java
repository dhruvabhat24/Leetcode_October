class Solution {
    public int numIdenticalPairs(int[] nums) {
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        int goodPairs = 0;
        for (int num : nums) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }
        for (int count : frequencyMap.values()) {
            goodPairs += (count * (count - 1)) / 2;
        }
        return goodPairs;
    }
    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] nums1 = {1, 2, 3, 1, 1, 3};
        int output1 = solution.numIdenticalPairs(nums1);
        System.out.println(output1);
        int[] nums2 = {1, 1, 1, 1};
        int output2 = solution.numIdenticalPairs(nums2);
        System.out.println(output2); 
    }
}
