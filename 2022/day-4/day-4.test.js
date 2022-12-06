const { day4, numberiser, day4pt2 } = require('.')
const { data } = require('./data')

// describe('numberiser', () => {
//   test('returns a number from a string', () => {
//     const expected = 2
//     const actual = numberiser('2-4')
//     expect(actual).toBe(expected)
//   })
//   test('returns a number from a string', () => {
//     const expected = 0
//     const actual = numberiser('6-6')
//     expect(actual).toBe(expected)
//   })
// })

describe('day 4', () => {
  test('returns a number', () => {
    const expected = 'number'
    const actual = typeof day4()
    expect(actual).toBe(expected)
  })
  test('one pair in an array', () => {
    const expected = 1
    const actual = day4(['6-6,4-6'])
    expect(actual).toBe(expected)
  })
  test('one pair in an array', () => {
    const input = [
      '2-4,6-8',
      '2-3,4-5',
      '5-7,7-9',
      '2-8,3-7',
      '6-6,4-6',
      '2-6,4-8'
    ]
    const expected = 2
    const actual = day4(input)
    expect(actual).toBe(expected)
  })
  test('one pair in an array', () => {
    const input = [
      '22-44,25-40',
      '25-40,22-44',
      '2-3,4-5',
      '5-7,7-9',
      '2-8,3-7',
      '6-6,4-6',
      '2-6,4-8'
    ]
    const expected = 4
    const actual = day4(input)
    expect(actual).toBe(expected)
  })
  test('one pair in an array', () => {
    const input = [
      '22-44,25-40',
      '25-40,22-44',
      '2-3,4-5',
      '5-7,7-9',
      '2-8,3-7',
      '6-6,4-6',
      '6-6,6-6'
    ]
    const expected = 5
    const actual = day4(input)
    expect(actual).toBe(expected)
  })
  test('data', () => {
    const expected = 582
    const actual = day4(data)
    expect(actual).toBe(expected)
  })
})

describe('part 2', () => {
  test('Returns 1 with one overlapping pair', () => {
    const input = ['5-7,7-9']
    const expected = 1
    const actual = day4pt2(input)
    expect(actual).toBe(expected)
  })
  test('Returns 1 with one overlapping pair', () => {
    const input = ['7-9,5-7']
    const expected = 1
    const actual = day4pt2(input)
    expect(actual).toBe(expected)
  })
  test('Returns 1 with one overlapping pair', () => {
    const input = [
      '2-4,6-8',
      '2-3,4-5',
      '5-7,7-9',
      '2-8,3-7',
      '6-6,4-6',
      '2-6,4-8'
    ]
    const expected = 4
    const actual = day4pt2(input)
    expect(actual).toBe(expected)
  })
  test('Returns 1 with one overlapping pair', () => {
    const expected = 893
    const actual = day4pt2(data)
    expect(actual).toBe(expected)
  })
})
