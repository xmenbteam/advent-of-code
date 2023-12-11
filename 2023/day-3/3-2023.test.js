const { day3, day3pt2 } = require("./3-2023")
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

describe('day 3 pt 2', () => {
  it('next to each other x', () => {
    const input = [
      '467*35...',
      '..........',
      '..35..633.',
    ]
    const expected = 16345
    const actual = day3pt2(input)
    expect(actual).toBe(expected)
  })
  it('next to each other y', () => {
    const input = [
      '4',
      '*',
      '3',
    ]
    const expected = 12
    const actual = day3pt2(input)
    expect(actual).toBe(expected)
  })
  it('diagonal y', () => {
    const input = [
      '4..',
      '.*.',
      '..3',
    ]
    const expected = 12
    const actual = day3pt2(input)
    expect(actual).toBe(expected)
  })
  it('multiple numbers y', () => {
    const input = [
      '45.',
      '..*.',
      '..3',
    ]
    const expected = 135
    const actual = day3pt2(input)
    expect(actual).toBe(expected)
  })
  it('small input', () => {
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
    const expected = 467835
    const actual = day3pt2(input)
    expect(actual).toBe(expected)
  })
})