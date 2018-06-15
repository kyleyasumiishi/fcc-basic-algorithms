function reverseString(str) {
    let arrayOfStrings = str.split("");
    let reversed = "";
    for (let i = arrayOfStrings.length - 1; i >= 0; i--) {
        reversed += arrayOfStrings[i];
    }
    return reversed;
}

reverseString("hello");

module.exports = { reverseString: reverseString };



// Create an array where each character of str is an element - how to turn a string into an array

// let arrayOfStrings = str.split("");

// Declare a variable that's an empty string 



// Iterate through array in reverse and concatenate element to variable

// return variable