import {caesarCipher} from './caesarCipher'

test('shifts characters by 1', () => {
    expect(caesarCipher('abc')).toBe('bcd')
})

test('works on all letters', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz')).toBe('bcdefghijklmnopqrstuvwxyza')
})

test('works on capital letters', () => {
    expect(caesarCipher('ABC')).toBe('BCD')
})

test('respects punctuation', () => {
    expect(caesarCipher('a b, c!')).toBe('b c, d!')
})