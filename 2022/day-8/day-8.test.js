const { day8 } = require('.')

const testData = ['30373', '25512', '65332', '33549', '35390']
//21

describe('day 8', () => {
  test('testData', () => {
    const input = ['333', '373', '333']
    const expected = 9
    const actual = day8(input)
    expect(actual).toBe(expected)
  })
})
