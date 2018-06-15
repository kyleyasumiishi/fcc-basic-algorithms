function findLongestWordLength(str) {
    let words = str.split(" ");
    let longestWordLength = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWordLength) {
            longestWordLength = words[i].length;
        }
    }
    return longestWordLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

module.exports = { findLongestWordLength };    

/* You can write concise object literal declaration using simple fields. 
For example, instead of { findLongestWordLength : findLongestWordLength }, you can 
export the function simply by writing findLongestWordLength once, like so: { findLongestWordLength }.
*/

