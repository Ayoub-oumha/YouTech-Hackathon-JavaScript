function getlongword(word1, word2) {
    // Your code here
    word1.length > word2.length ? console.log(word1) : console.log(word2);
}



getlongword("cat", "mouse")     // Should return "mouse"
getlongword("bird", "dog")      // Should return "bird"