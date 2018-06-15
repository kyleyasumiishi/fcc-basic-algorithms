/*
 * Returns true if the string in the first element of the array contains all the letters of the string in the second element of the array.
 * @param {Array} arr - Array containing two string elements.
 */
function mutation(arr) {
    let str1 = arr[0].toLowerCase().split("");
    let str2 = arr[1].toLowerCase().split("");
    for (let i = 0; i < str2.length; i++) {
        if (str1.indexOf(str2[i]) === -1) {
            return false;
        }
    }
    return true;
}
