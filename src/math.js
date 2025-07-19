/**
 * 2つの数値を足し算する
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function add(a, b) {
    return a + b;
}

/**
 * 2つの数値を引き算する
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function subtract(a, b) {
    return a - b;
}

/**
 * 2つの数値を掛け算する
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function multiply(a, b) {
    return a * b;
}

/**
 * 2つの数値を割り算する
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function divide(a, b) {
    if (b === 0) {
        throw new Error('0で割ることはできません');
    }
    return a / b;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide
}; 