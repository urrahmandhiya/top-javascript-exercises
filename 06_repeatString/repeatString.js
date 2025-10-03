const repeatString = function(str, amount) {
    let result = "";
    if (amount < 0) return "ERROR";
    for (let i = 0; i < amount; i++) result += String(str);
    return result; 
};

// Do not edit below this line
module.exports = repeatString;
