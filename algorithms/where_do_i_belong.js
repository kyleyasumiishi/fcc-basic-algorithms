/*
 * Returns the lowest index at which a value should be inserted into an array once it has been sorted.
 * @param {Array} arr 
 * @param {Number} num
 */
function getIndexToIns(arr, num) {
    let sortedArr = arr.slice().sort((a, b) => a - b);
    for (let idx = 0; idx < sortedArr.length; idx++) {
        if (num <= sortedArr[idx]) {
            return idx;
        }
    }
    return sortedArr.length;
}
