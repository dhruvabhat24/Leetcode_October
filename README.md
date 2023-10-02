# Leet-code-practice
# Daily one question solve from leetcode

## 1. Monotonic Array
- An array is monotonic if it is either monotone increasing or monotone decreasing.
- An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j]. Given an integer array nums, write a function to determine if the given array is monotonic.
## 2. 132 Pattern
- Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j].
Return true if there is a 132 pattern in nums, otherwise, return false.
## 3. Reverse words in a given string
- Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
- Example 1:
- Input: s = "Let's take LeetCode contest"
- Output: "s'teL ekat edoCteeL tsetnoc"
## 3. Remove Colored Pieces if Both Neighbors are the Same Color
There are n pieces arranged in a line, and each piece is colored either by 'A' or by 'B'. You are given a string colors of length n where colors[i] is the color of the ith piece.
Alice and Bob are playing a game where they take alternating turns removing pieces from the line. In this game, Alice moves first.
Alice is only allowed to remove a piece colored 'A' if both its neighbors are also colored 'A'. She is not allowed to remove pieces that are colored 'B'.
Bob is only allowed to remove a piece colored 'B' if both its neighbors are also colored 'B'. He is not allowed to remove pieces that are colored 'A'.
Alice and Bob cannot remove pieces from the edge of the line.
If a player cannot make a move on their turn, that player loses and the other player wins.
