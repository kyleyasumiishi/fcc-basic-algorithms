/*
 * Converts Celcius to Fahrenheit.
 * @param {Number} celcius
 */
function convertToF(celsius) {
    return (celsius * 9/5) + 32;
}

module.exports = { convertToF };