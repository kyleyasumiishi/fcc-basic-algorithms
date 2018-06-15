function convertToF(celsius) {
    return (celsius * 9/5) + 32;
}
  
convertToF(30);

module.exports = { convertToF: convertToF };