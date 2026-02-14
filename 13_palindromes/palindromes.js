const palindromes = function (str) {
    let cleanedString = str
        .replace(/[ .,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        .toLowerCase();
    
    let left = 0;
    let right = cleanedString.length - 1;

    while (left < right) {
        if (cleanedString[left] !== cleanedString[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
