const calculator = require('./calculator');

// Testing normal use cases
test('Test string 1127839561 with n=3 returns 270', () => {
    expect(calculator.getMaxProduct('1127839561', 3)).toBe(270);
});

test('Test string 1127839561 with n=5 returns 7560', () => {
    expect(calculator.getMaxProduct('1127839561', 5)).toBe(7560);
});

test('Test string 876368478378844 with n=2 returns 64', () => {
    expect(calculator.getMaxProduct('876368478378844', 2)).toBe(64);
});

test('Test string 876368478378844 with n=10 returns 57802752', () => {
    expect(calculator.getMaxProduct('876368478378844', 10)).toBe(57802752);
});

test('Test string 1232999 with n=3 returns 729', () => {
    expect(calculator.getMaxProduct('1232999', 3)).toBe(729);
});

// Testing exceptions
test('Test string 12345 with n=0 throws an exception', () => {
    expect(() => {
        calculator.getMaxProduct('12345', 0)
    }).toThrow();
});

test('Test string 12345 with n=-2 throws an exception', () => {
    expect(() => {
        calculator.getMaxProduct('12345', -2)
    }).toThrow(Error);
});

test('Test string 12345 with n=6 throws an exception', () => {
    expect(() => {
        calculator.getMaxProduct('12345', 6)
    }).toThrow(Error);
});
