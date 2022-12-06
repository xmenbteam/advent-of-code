const { day5, day5pt2 } = require('.')
const { stack, data } = require('./data')

const deepCopy = (obj) => JSON.parse(JSON.stringify(obj))

describe('day 5', () => {
  test('returns a string', () => {
    const expected = ''
    const actual = day5()
    expect(actual).toBe(expected)
  })
  test('moves one box', () => {
    const testStack = [['a', 'b'], []]
    const message = ['move 1 from 1 to 2']
    const expected = 'ab'
    const actual = day5(testStack, message)
    expect(actual).toBe(expected)
  })
  test('moves a few boxes', () => {
    const testStack = [['a', 'b', 'c'], []]
    const message = ['move 2 from 1 to 2']
    const expected = 'ab'
    const actual = day5(testStack, message)
    expect(actual).toBe(expected)
  })
  test('test input', () => {
    const testStack = [['Z', 'N'], ['M', 'C', 'D'], ['P']]
    const message = [
      'move 1 from 2 to 1',
      'move 3 from 1 to 3',
      'move 2 from 2 to 1',
      'move 1 from 1 to 2'
    ]
    const expected = 'CMZ'
    const actual = day5(testStack, message)
    expect(actual).toBe(expected)
  })
  test('actual input', () => {
    const expected = 'VQZNJMWTR'
    const actual = day5(deepCopy(stack), data)
    expect(actual).toBe(expected)
  })
})

describe('day 5 part 2', () => {
  test('returns a string', () => {
    const expected = ''
    const actual = day5pt2()
    expect(actual).toBe(expected)
  })
  test('moves one box', () => {
    const testStack = [['a', 'b'], []]
    const message = ['move 1 from 1 to 2']
    const expected = 'ab'
    const actual = day5pt2(testStack, message)
    expect(actual).toBe(expected)
  })
  test('moves a few boxes', () => {
    const testStack = [['a', 'b', 'c'], []]
    const message = ['move 2 from 1 to 2']
    const expected = 'ac'
    const actual = day5pt2(testStack, message)
    expect(actual).toBe(expected)
  })
  test('test input', () => {
    const testStack = [['Z', 'N'], ['M', 'C', 'D'], ['P']]
    const message = [
      'move 1 from 2 to 1',
      'move 3 from 1 to 3',
      'move 2 from 2 to 1',
      'move 1 from 1 to 2'
    ]
    const expected = 'MCD'
    const actual = day5pt2(testStack, message)
    expect(actual).toBe(expected)
  })
  test('actual input', () => {
    const expected = 'NLCDCLVMQ'
    const actual = day5pt2(deepCopy(stack), data)
    expect(actual).toBe(expected)
  })
})
