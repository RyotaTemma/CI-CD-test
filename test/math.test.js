const { add, subtract, multiply, divide } = require('../src/math');

describe('Math functions', () => {
    test('足し算が正しく動作する', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-1, 1)).toBe(0);
        expect(add(0, 0)).toBe(0);
    });

    test('引き算が正しく動作する', () => {
        expect(subtract(5, 3)).toBe(2);
        expect(subtract(1, 1)).toBe(0);
        expect(subtract(0, 5)).toBe(-5);
    });

    test('掛け算が正しく動作する', () => {
        expect(multiply(3, 4)).toBe(12);
        expect(multiply(-2, 3)).toBe(-6);
        expect(multiply(0, 5)).toBe(0);
    });

    test('割り算が正しく動作する', () => {
        expect(divide(10, 2)).toBe(5);
        expect(divide(9, 3)).toBe(3);
        expect(divide(-6, 2)).toBe(-3);
    });

    test('0で割るとエラーが発生する', () => {
        expect(() => divide(5, 0)).toThrow('0で割ることはできません');
    });
}); 