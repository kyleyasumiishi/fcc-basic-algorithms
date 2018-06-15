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

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

module.exports = { largestOfFour };

