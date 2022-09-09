const reverseString = require('./reverseString')

test('returns a reversed string', () => {
    expect(reverseString('Cheese')).toBe('eseehC')
})