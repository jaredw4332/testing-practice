import {add, subtract, divide, multiply} from './calculator';

test('adds 1 + 10 to equal 11', () => {
    expect(add(1, 10)).toBe(11)
})

test('subtracts 15 - 5 to equal 10', () => {
    expect(subtract(15, 5)).toBe(10)
})

test('divides 16 / 2 to equal 8', () => {
    expect(divide(16, 2)).toBe(8)
})

test('multiplies 9 * 2 to equal 18', () => {
    expect(multiply(9, 2)).toBe(18)
})