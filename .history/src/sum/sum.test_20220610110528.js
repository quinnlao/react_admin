const sum = require('./sum');

describe('sum function test', () => {
    it('sum(1, 2) === 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    // 这里 test 和 it 没有明显区别，it 是指: it should xxx, test 是指 test xxx
    test('sum(1, 2) === 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
})