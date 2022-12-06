const { TestWatcher } = require('jest')
const { day6, day6pt2 } = require('.')
const { data } = require('./data')

describe('day 6', () => {
  test('Four different characters', () => {
    const input = 'asdfg'
    const expected = 4
    const actual = day6(input)
    expect(actual).toBe(expected)
  })
  test('Data 1', () => {
    const input = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb'
    const expected = 7
    const actual = day6(input)
    expect(actual).toBe(expected)
  })
  test('Data 2', () => {
    const input = 'bvwbjplbgvbhsrlpgdmjqwftvncz'
    const expected = 5
    const actual = day6(input)
    expect(actual).toBe(expected)
  })
  test('Data 3', () => {
    const input = 'nppdvjthqldpwncqszvftbrmjlhg'
    const expected = 6
    const actual = day6(input)
    expect(actual).toBe(expected)
  })
  test('Data 4', () => {
    const input = 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'
    const expected = 10
    const actual = day6(input)
    expect(actual).toBe(expected)
  })
  test('Data 5', () => {
    const input = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'
    const expected = 11
    const actual = day6(input)
    expect(actual).toBe(expected)
  })
  test('Big Data', () => {
    const expected = 1598
    const actual = day6(data)
    expect(actual).toBe(expected)
  })
})

describe('part 2', () => {
  test('Data 1', () => {
    const input = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb'
    const expected = 19
    const actual = day6pt2(input)
    expect(actual).toBe(expected)
  })
  test('Data 2', () => {
    const input = 'bvwbjplbgvbhsrlpgdmjqwftvncz'
    const expected = 23
    const actual = day6pt2(input)
    expect(actual).toBe(expected)
  })
  test('Big Data', () => {
    const expected = 2414
    const actual = day6pt2(data)
    expect(actual).toBe(expected)
  })
})
