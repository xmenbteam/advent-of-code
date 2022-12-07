const { smallData, largeData } = require('../data/3-test-data')

const { binaryDiagnostic } = require('../3')

describe('binaryDiagnostic', () => {
  it('returns a number', () => {
    // const input = data;
    const expected = 0
    const actual = binaryDiagnostic()
    expect(actual).toBe(expected)
  })
  it('returns 10110 when passed small data', () => {
    const input = smallData
    const expected = 0
    const actual = binaryDiagnostic(input)
    // expect(actual).toBe(expected);
  })
})
