/*
 * Checks if a value is classified as a boolean primitive.
 */
function booWho(bool) {
    return (typeof bool === 'boolean');
}

module.exports = { booWho };