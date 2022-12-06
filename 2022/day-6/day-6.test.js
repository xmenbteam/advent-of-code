const { TestWatcher } = require('jest')
const { day6 } = require('.')

describe('day 6', () => {
  test('Four different characters', () => {
    const input = 'asdfg'
    const expected = 5
    const actual = day6(input)
    expect(actual).toBe(expected)
  })
})
