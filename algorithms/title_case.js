/*
 * Returns the provided string with the first letter of each word capitalized. The rest of each word will be in lower case.
 * @param {String} str
 */
function titleCase(str) {
    let lowerCaseArr = str.toLowerCase().split(" ");
    let titleCaseArr = lowerCaseArr.map(word => {
        let re = /[a-z]/;
        let firstLetterPos = word.search(re);
        return word.replace(re, word.slice(firstLetterPos, firstLetterPos + 1).toUpperCase());
    });
    return titleCaseArr.join(" ");
}

module.exports = { titleCase };
