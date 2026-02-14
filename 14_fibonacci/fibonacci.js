const fibonacci = function(input) {
    let num = Number(input);
    if (num === 0) return 0;
    if (num < 0) return "OOPS";

    let seq = [1, 1];
    while (seq.length <= num) {
        let cur = seq[seq.length - 1] + seq[seq.length - 2];
        seq.push(cur)
    }
    return seq[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
