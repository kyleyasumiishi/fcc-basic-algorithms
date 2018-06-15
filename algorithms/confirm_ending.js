/*
 * Checks if a string (str) ends with the given target string (target).
 * @param {String} str
 * @param {String} target
 */
function confirmEnding(str, target) {
    let regex = new RegExp(target + "$");
    return regex.test(str);
}

module.exports = { confirmEnding };

