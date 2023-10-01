class Solution {
    public String reverseWords(String s) {
      String[] words = s.split(" "); 
        StringBuilder result = new StringBuilder();
        for (String word : words) {
            StringBuilder reversedWord = new StringBuilder(word);
            reversedWord.reverse(); 
            result.append(reversedWord).append(" ");
        }
        return result.toString().trim();
    }
    public static void main(String[] args) {
        Solution solution = new Solution();
        String input = "Let's take LeetCode contest";
        String reversedSentence = solution.reverseWords(input);
        System.out.println(reversedSentence);
    }
}
