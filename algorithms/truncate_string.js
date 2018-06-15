/*
 * Truncates a string if it is longer than the given maximum string length. Returns the truncated string with a ... ending.
 * @param {String} str
 * @param {Number} num
 */
function truncateString(str, num) {
    let slicedStr = str.slice(0, num);
    return slicedStr.length < str.length ? slicedStr + "..." : str;
}

module.exports = { truncateString };
