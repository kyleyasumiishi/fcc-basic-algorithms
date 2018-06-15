function confirmEnding(str, target) {
    let regex = new RegExp(target + "$");
    return regex.test(str);
}

confirmEnding("Bastian", "n");

module.exports = { confirmEnding };

// return true or false

// use regex. targetRe = new Regex(target)
// let pattern = target + "$"
// let regex = new RegExp(pattern);

// test whether str ends with targetRe
// return regex.test(str)