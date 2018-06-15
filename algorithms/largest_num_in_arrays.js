/*
 * Returns an array consisting of the largest number from each provided sub-array.
 * @param {Array} arr - A multidimensional array. 
 * FreeCodeCamp Note: For simplicity, the provided array for each test contains exactly four sub-arrays.
 */
function largestOfFour(arr) {
    let largestNums = [];
    for (let arrIdx = 0; arrIdx < arr.length; arrIdx++) {
        let maxNum = arr[arrIdx][0];
        for (let subArrIdx = 0; subArrIdx < arr[arrIdx].length; subArrIdx++) {
            if (arr[arrIdx][subArrIdx] > maxNum) {
                maxNum = arr[arrIdx][subArrIdx];
            }
        }
        largestNums.push(maxNum);
    }
    return largestNums;
}

module.exports = { largestOfFour };

