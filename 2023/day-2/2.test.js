const { day2, day2pt2 } = require("./2")
const { data } = require("./2-data")

describe('day 2', () => {
  it('one string, possible', () => {
    const input = ['Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green']
    const expected = 1
    const actual = day2(input)
    expect(actual).toBe(expected)
  })
  it('one string, not possible', () => {
    const input = ['Game 1: 35 blue, 4 red; 1 red, 2 green, 6 blue; 2 green']
    const expected = 0
    const actual = day2(input)
    expect(actual).toBe(expected)
  })
  it('small puzzle input', () => {
    const input = [
      'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
      'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
      'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
      'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
      'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green',
    ]
    const expected = 8
    const actual = day2(input)
    expect(actual).toBe(expected)
  })
  it('sample of full data', () => {
    const input = [
      'Game 65: 1 blue, 7 green, 1 red; 7 red, 1 green; 1 blue, 3 green, 3 red; 7 red, 3 green; 3 green, 7 red; 1 blue, 4 green',
      'Game 66: 7 green, 6 blue, 8 red; 4 green, 9 red, 3 blue; 6 green, 4 blue; 5 blue, 2 green; 6 red, 4 green, 2 blue',
      'Game 67: 10 blue, 17 green, 17 red; 11 red, 9 blue, 9 green; 9 blue, 19 red, 5 green; 5 red, 3 blue, 20 green; 11 red, 1 blue, 7 green',
      'Game 68: 9 green, 4 red, 5 blue; 11 blue, 9 green, 2 red; 11 blue, 2 red, 6 green; 2 green, 6 red, 3 blue; 1 blue, 6 green, 4 red',
      'Game 69: 3 red, 15 blue, 1 green; 4 red, 14 blue, 2 green; 4 red, 18 blue, 4 green',
      'Game 70: 3 red, 8 green; 2 red, 6 green; 4 red, 2 blue, 2 green; 8 red, 1 green, 2 blue; 6 red, 3 blue, 4 green; 13 green, 8 red',
      'Game 71: 3 green, 17 red; 2 red, 3 green; 2 green, 8 red, 1 blue; 11 red, 4 blue; 3 green, 11 red, 3 blue',
      'Game 72: 1 red, 17 blue, 8 green; 2 red, 11 blue, 16 green; 3 red, 16 blue, 1 green; 2 red, 3 green, 10 blue',
      'Game 73: 1 blue, 10 green, 8 red; 19 green, 10 red, 5 blue; 3 green, 13 red, 8 blue; 12 green, 4 blue; 2 green, 10 blue, 12 red',
    ]
    const expected = 269
    const actual = day2(input)
    expect(actual).toBe(expected)
  })
  it('full data', () => {
    const expected = 2685
    const actual = day2(data)
    expect(actual).toBe(expected)
  })
})


describe('pt2', () => {
  it('one string', () => {
    const input = ['Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green']
    const expected = 48
    const actual = day2pt2(input)
    expect(actual).toBe(expected)
  })
  it('small input', () => {
    const input = [
      'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
      'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
      'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
      'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
      'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green',
    ]
    const expected = 2286
    const actual = day2pt2(input)
    expect(actual).toBe(expected)
  })
  it('puzzle input', () => {
    const expected = 83707
    const actual = day2pt2(data)
    expect(actual).toBe(expected)
  })
})