const capitalize = require('./capitalize')

test('first digit returns capital', () => {
    expect(capitalize('cheese')).toBe('Cheese')
})