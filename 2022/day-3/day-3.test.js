const {
  letterValueFinder,
  duplicateFinder,
  day3,
  threeWaySplitter,
  triplicateFinder,
  day3pt2
} = require('.')
const { data } = require('./data')
describe('day 3', () => {
  describe('letterValueFinder', () => {
    test('returns a number', () => {
      const expected = 'number'
      const actual = letterValueFinder()
      expect(typeof actual).toBe(expected)
    })
    test('Small strings - a a', () => {
      const input = 'a'
      const expected = 1
      const actual = letterValueFinder(input)
      expect(actual).toBe(expected)
    })
    test('Small strings - z z', () => {
      const input = 'z'
      const expected = 26
      const actual = letterValueFinder(input)
      expect(actual).toBe(expected)
    })
    test('Small strings - A A', () => {
      const input = 'A'
      const expected = 27
      const actual = letterValueFinder(input)
      expect(actual).toBe(expected)
    })
    test('Small strings - Z Z', () => {
      const input = 'Z'
      const expected = 52
      const actual = letterValueFinder(input)
      expect(actual).toBe(expected)
    })
  })
  describe('duplicateFinder', () => {
    test('returns an array', () => {
      const input1 = ''
      const input2 = ''
      const expectedOutput = ''
      const actual = duplicateFinder(input1, input2)
      expect(actual).toBe(expectedOutput)
    })
    test('returns a', () => {
      const input1 = 'a'
      const input2 = 'a'
      const expectedOutput = 'a'
      const actual = duplicateFinder(input1, input2)
      expect(actual).toEqual(expectedOutput)
    })
    test('returns a', () => {
      const input1 = 'QQQQQQQQa'
      const input2 = 'FFFFDFFFAHHGa'
      const expectedOutput = 'a'
      const actual = duplicateFinder(input1, input2)
      expect(actual).toEqual(expectedOutput)
    })
  })
  describe('day3', () => {
    test('single element in an array', () => {
      const input = ['vJrwpWtwJgWrhcsFMMfFFhFp']
      const expected = 16
      const actual = day3(input)
      expect(actual).toBe(expected)
    })
    test('small data', () => {
      const input = [
        'vJrwpWtwJgWrhcsFMMfFFhFp',
        'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
        'PmmdzqPrVvPwwTWBwg',
        'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
        'ttgJtRGJQctTZtZT',
        'CrZsJsPPZsGzwwsLwLmpwMDw'
      ]
      const expected = 157
      const actual = day3(input)
      expect(actual).toBe(expected)
    })
    test('actual data', () => {
      const expected = 8298
      const actual = day3(data)
      expect(actual).toBe(expected)
    })
  })
})

describe('day 3 part 2', () => {
  test('threeWaySplitter', () => {
    const input = ['a', 'a', 'a', 'a', 'a', 'a']
    const expected = [
      ['a', 'a', 'a'],
      ['a', 'a', 'a']
    ]
    const actual = threeWaySplitter(input)
    expect(actual).toEqual(expected)
  })
  describe('triplicateFinder', () => {
    test(' finds common char', () => {
      const input = ['a', 'a', 'a']
      const expected = 'a'
      const actual = triplicateFinder(input)
      expect(actual).toBe(expected)
    })
    test('small data 1', () => {
      const input = [
        'vJrwpWtwJgWrhcsFMMfFFhFp',
        'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
        'PmmdzqPrVvPwwTWBwg'
      ]
      const expected = 'r'
      const actual = triplicateFinder(input)
      expect(actual).toBe(expected)
    })
    test('small data 2', () => {
      const input = [
        'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
        'ttgJtRGJQctTZtZT',
        'CrZsJsPPZsGzwwsLwLmpwMDw'
      ]
      const expected = 'Z'
      const actual = triplicateFinder(input)
      expect(actual).toBe(expected)
    })
  })
  describe('day3pt2', () => {
    test('small data', () => {
      const input = [
        'vJrwpWtwJgWrhcsFMMfFFhFp',
        'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
        'PmmdzqPrVvPwwTWBwg',
        'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
        'ttgJtRGJQctTZtZT',
        'CrZsJsPPZsGzwwsLwLmpwMDw'
      ]
      const expectedOutput = 70
      const actual = day3pt2(input)
      expect(actual).toBe(expectedOutput)
    })
    test('big data', () => {
      const expectedOutput = 2708
      const actual = day3pt2(data)
      expect(actual).toBe(expectedOutput)
    })
  })
})
