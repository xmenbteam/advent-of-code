const { day1, day1pt2 } = require("./1")
const fs = require('fs')
const { data } = require("./data-1")

describe('day 1', () => {
  it('returns a number', () => {
    const input = ['a1b2c3d4e5f']
    const expected = 15
    const actual = day1(input)
    expect(actual).toBe(expected)
  })
  it('data', () => {
    const input = data
    const expected = 53921
    const actual = day1(input)
    expect(actual).toBe(expected)
  })
})

describe('day 1 part 2', () => {
  it('one entry', () => {
    const input = ['two1nine']
    const expected = 29
    const actual = day1pt2(input)
    expect(actual).toBe(expected)
  })
  it.only('oneeight', () => {
    const input = ['oneight']
    const expected = 18
    const actual = day1pt2(input)
    expect(actual).toBe(expected)
  })
  it('one entry', () => {
    const input = ['twodckjhad']
    const expected = 22
    const actual = day1pt2(input)
    expect(actual).toBe(expected)
  })
  it('one entry', () => {
    const input = ['two1nine']
    const expected = 29
    const actual = day1pt2(input)
    expect(actual).toBe(expected)
  })
  it('a few entries', () => {
    const input = [
      'two1nine',
      'eightwothree',
      'abcone2threexyz',
      'xtwone3four',
      '4nineeightseven2',
      'zoneight234',
      '7pqrstsixteen'
    ]
    const expected = 281
    const actual = day1pt2(input)
    expect(actual).toBe(expected)
  })
  it('full data', () => {
    const expected = 54673
    const actual = day1pt2(data)
    expect(actual).toBe(expected)
  })
})