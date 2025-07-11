// test/index.test.js

const { greet } = require('../index');

describe('Greeting Function', () => {
    test('returns greeting for given name', () => {
        expect(greet('Samarth')).toBe('Hello, Samarth!');
    });

    test('returns greeting for anonymous', () => {
        expect(greet('')).toBe('Hello, !');
    });
});
