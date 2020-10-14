/**
 * Calculates the maximum product based on the number of adjacent digits
 * 
 * @param digits The digits string
 * @param number The number of adjacent digits to check
 */
export function getMaxProduct(digits: any, number: number): number {
    if (digits === undefined)
        throw new Error('Missing first parameter "digits" (string of digits to check)');
    
    if (number === undefined)
        throw new Error('Missing second parameter "number" (number of adjacent digits to check)');
    
    if (number === 0 || number < 1)
        throw new Error('The second parameter "number" must be an int and greater than 0');
    
    if (number > digits.length)
        throw new Error('The second parameter "number" cannot be greater than the character count of the digits parameter');

    let sequences = []

    for (let digit in digits) {
        const sequence = digits.substr(digit, number);

        if (sequence.length == number) {
            sequences.push(sequence
                .split("")
                .reduce((a, c) => a * c)
            );
        }
    }

    return Math.max(...sequences);
}
