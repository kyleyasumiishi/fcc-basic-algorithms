/*
 * Repeats a given string str for num times. Return an empty string if num is not a positive number.
 * @param {String} str
 * @param {Number} num
 */
function repeatStringNumTimes(str, num) {
    let repeated = "";
    for (let i = 0; i < num; i++) {
        repeated += str;
    }
    return num < 1 ? "" : repeated;    
}

module.exports = { repeatStringNumTimes };
