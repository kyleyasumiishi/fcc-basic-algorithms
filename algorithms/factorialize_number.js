function factorialize(num) {
    let factorial = 1;
    for (let i = num; i > 0; i--) {
        factorial *= i;
    }
    return factorial;
}

factorialize(5);

module.exports = { factorialize: factorialize };
