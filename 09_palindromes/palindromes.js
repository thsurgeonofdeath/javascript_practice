const palindromes = function (word) {
    reversed = word.toLowerCase().replace(/[^a-z]/g, "");
    return (
      reversed
        .split("")
        .reverse()
        .join("") == reversed
    );
};

// Do not edit below this line
module.exports = palindromes;
