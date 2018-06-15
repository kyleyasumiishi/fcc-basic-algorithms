/*
 * Reverse the provided string.
 * @param {String} str
 */
function reverseString(str) {
    let arrayOfStrings = str.split("");
    let reversed = "";
    for (let i = arrayOfStrings.length - 1; i >= 0; i--) {
        reversed += arrayOfStrings[i];
    }
    return reversed;
}

module.exports = { reverseString: reverseString };
