const fs = require('fs/promises')
const { day8 } = require('.')
const { data } = require('./data')

const testData = ['30373', '25512', '65332', '33549', '35390']
//21

describe('day 8', () => {
  test('testData', () => {
    const input = ['333', '373', '333']
    const expected = 9
    const actual = day8(input)
    expect(actual).toBe(expected)
  })
  test('testData', () => {
    const input = ['373', '777', '373']
    const expected = 8
    const actual = day8(input)
    expect(actual).toBe(expected)
  })
  test('testData', () => {
    const input = ['373', '777', '363']
    const expected = 9
    const actual = day8(input)
    expect(actual).toBe(expected)
  })
  test('testData', () => {
    const expected = 21
    const actual = day8(testData)
    expect(actual).toBe(expected)
  })
  test('data data', async () => {
    const expected = 1207
    const actual = day8(data)
    expect(actual).toBe(expected)
  })
})
