/*
 * Copies each element of the first array into the second array in order, beginning at index n of the second array. Returns the resulting array. The input arrays remain unmodified.
 * @param {Array} arr1 - Elements sliced from this array.
 * @param {Array} arr2 - Elements copied into this array. 
 * @param {Number} n - Represents index position of arr2.
 */
function frankenSplice(arr1, arr2, n) {
    let copyArr1 = arr1.slice();
    let copyArr2 = arr2.slice();
    copyArr2.splice(n, 0, ...copyArr1);
    return copyArr2;
}

module.exports = { frankenSplice };

