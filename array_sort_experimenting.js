// This is code I wrote to experiment with Array.prototype.sort. It's not used anywhere else this file.

let numbers = [5, 4, 3, 2, 1];

let count = 0;

function compareNumbers(a, b) {
    count++;
    console.log("count: ", count);
    console.log("a: ", a);
    console.log("b: ", b);
    console.log("a - b: ", (a - b));
    console.log(numbers);
    return a - b;
}

numbers.sort(compareNumbers);

console.log("final: ", numbers);