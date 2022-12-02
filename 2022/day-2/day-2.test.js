const { day2, day2pt2 } = require('.')
const { data } = require('./data')

describe('day2', () => {
  test('returns a number', () => {
    const expected = 'number'
    const actual = day2()
    expect(typeof actual).toBe(expected)
  })
  test('small data', () => {
    // const smallData = ['A Y', 'B X', 'C Z']
    const smallData = ['A Y']
    const expected = 8
    const actual = day2(smallData)
    expect(actual).toBe(expected)
  })
  test('small data 2', () => {
    // const smallData = ['A Y', 'B X', 'C Z']
    const smallData = ['A Y', 'B X']
    const expected = 9
    const actual = day2(smallData)
    expect(actual).toBe(expected)
  })
  test('small data 3', () => {
    const smallData = ['A Y', 'B X', 'C Z']
    const expected = 15
    const actual = day2(smallData)
    expect(actual).toBe(expected)
  })
  test('data', () => {
    const expected = 13809
    const actual = day2(data)
    expect(actual).toBe(expected)
  })
})

describe('day2pt2', () => {
  test('returns an array', () => {
    const expected = 0
    const actual = day2pt2()
    expect(actual).toBe(expected)
  })
  test('small data', () => {
    // const smallData = ['A Y', 'B X', 'C Z']
    const smallData = ['A Y']
    const expected = 4
    const actual = day2pt2(smallData)
    expect(actual).toEqual(expected)
  })
  test('small data 2', () => {
    // const smallData = ['A Y', 'B X', 'C Z']
    const smallData = ['A Y', 'B X']
    const expected = 5
    const actual = day2pt2(smallData)
    expect(actual).toEqual(expected)
  })
  test('small data 3', () => {
    const smallData = ['A Y', 'B X', 'C Z']
    const expected = 12
    const actual = day2pt2(smallData)
    expect(actual).toEqual(expected)
  })
  test('data', () => {
    const expected = 12316
    const actual = day2pt2(data)
    expect(actual).toEqual(expected)
  })
})
