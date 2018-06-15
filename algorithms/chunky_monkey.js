/*
 * Splits an array into groups of length size and returns them as a two-dimentsional array.
 * @param {Array} arr
 * @param {Number} size
 */
function chunkArrayInGroups(arr, size) {
    let numInnerArrays = (arr.length % size === 0) ? arr.length / size : Math.floor((arr.length / size)) + 1;
    let outerArray = [];
    let beginSlice = 0;
    for (let i = 0; i < numInnerArrays; i++) {
        outerArray.push(arr.slice(beginSlice, beginSlice + size));
        beginSlice += size;
    }
    return outerArray;
}
