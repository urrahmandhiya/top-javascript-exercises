const removeFromArray = function(arr, ...items) {
    return arr.reduce((acc, curr) => {
        if (!items.includes(curr)) acc.push(curr);
        return acc;
    }, [])
};
// Do not edit below this line
module.exports = removeFromArray;
