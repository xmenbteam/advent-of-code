const { day3 } = require("./3-2023")
const { data } = require('./3-data')

describe('day 3', () => {
  it('symbol after number', () => {
    const input = [
      '467*.114..',
      '..........'
    ]
    const expected = 467
    const actual = day3(input)
    expect(actual).toBe(expected)
  })
  it('symbol before number', () => {
    const input = [
      '*467..114.',
      '..........'
    ]
    const expected = 467
    const actual = day3(input)
    expect(actual).toBe(expected)
  })
  it('symbol underneath number', () => {
    const input = [
      '467..114..',
      '.*........'
    ]
    const expected = 467
    const actual = day3(input)
    expect(actual).toBe(expected)
  })
  it('symbol above number', () => {
    const input = [
      '.*........',
      '467..114..'
    ]
    const expected = 467
    const actual = day3(input)
    expect(actual).toBe(expected)
  })
  it('symbol diagonal to number', () => {
    const input = [
      '467..114..',
      '...*......'
    ]
    const expected = 467
    const actual = day3(input)
    expect(actual).toBe(expected)
  })
  it('small puzzle input', () => {
    const input = [
      '467..114..',
      '...*......',
      '..35..633.',
      '......#...',
      '617*......',
      '.....+.58.',
      '..592.....',
      '......755.',
      '...$.*....',
      '.664.598..',
    ]
    const expected = 4361
    const actual = day3(input)
    expect(actual).toBe(expected)
  })
  it('full data', () => {
    const expected = 556057
    const actual = day3(data)
    expect(actual).toBe(expected)
  })
})