const { day7 } = require('.')
const { smallData, data } = require('./data')

describe('day 7', () => {
  test('small data', () => {
    const data = ['$ cd /', '$ ls', 'dir a', '148 b.txt', '850 c.dat']
    const expected = 998
    const actual = day7(data)
    expect(actual).toBe(expected)
  })
  test('small data 2', () => {
    const data = [
      '$ cd /',
      '$ ls',
      'dir a',
      '14800000 b.txt',
      '85000000 c.dat',
      'dir d',
      '$ cd a',
      '$ ls',
      'dir e',
      '25 f',
      '25 g'
    ]
    const expected = 50
    const actual = day7(data)
    expect(actual).toBe(expected)
  })
  test('Website data', () => {
    const expected = 95437
    const actual = day7(smallData)
    expect(actual).toBe(expected)
  })
  test('Actual data', () => {
    const expected = 911275
    const actual = day7(data)
    expect(actual).toBe(expected)
  })
})
