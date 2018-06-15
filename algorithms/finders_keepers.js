/*
 * Returns the first element (first arg) that passes a truth test (second arg). Returns undefined if no element passes the test.
 * @param {Array} arr
 * @param {Function} func
 */
function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i];
        }
    }
    return;
}

module.exports = { findElement };

/*
I learned there is no way to stop or break a forEach() loop other than by throwing an exception. If I need to exit a loop, such as by a return statement, a forEach() loop is the wrong tool.
*/
