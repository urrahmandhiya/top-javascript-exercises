const sumAll = function(num1, num2) {
    if (
        !Number.isInteger(num1) || 
        !Number.isInteger(num2) ||
        num1 < 0 ||
        num2 < 0
    ) return 'ERROR'

    let first = Math.min(num1, num2);
    let n = Math.max(num1, num2);
    return ((n - first + 1)/2 * (first + n))
};

// Do not edit below this line
module.exports = sumAll;
