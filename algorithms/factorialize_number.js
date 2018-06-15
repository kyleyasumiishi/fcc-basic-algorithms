/*
 * Returns the factorial of the provided integer.
 * @param {Number} num
 */
function factorialize(num) {
    let factorial = 1;
    for (let i = num; i > 0; i--) {
        factorial *= i;
    }
    return factorial;
}

module.exports = { factorialize: factorialize };
