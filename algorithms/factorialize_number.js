function factorialize(num) {
    let factorial = 1;
    for (let i = num; i > 0; i--) {
        factorial *= i;
    }
    return factorial;
}

factorialize(5);


module.exports = { factorialize: factorialize };


// don't worry about negative numbers - only positive integers >= 0 will be provided

// declare variable factorial

// possible solution - create an array of range of integers from 1 to num, then multiply them together. 

// is there a more elegant solution?
// single for loop ( 1 - num ) num * i
// iterate through positive integers in reverse direction starting from num, going down to 1, multiplying each on by variable.
