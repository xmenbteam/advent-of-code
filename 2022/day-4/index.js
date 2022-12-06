const numberiser = (string) => {
  const [num1, num2] = string.split('-')
  return +num2 - +num1
}

const day4 = (input) => {
  if (!input) return 0
  return input.reduce((totalWinners, twoPairsInAString) => {
    // Get the pairs of numbers
    const [firstPair, secondPair] = twoPairsInAString.split(',')
    // Split each pair into individual numbers
    const [pair1FirstNo, pair1SecondNo] = firstPair.split('-')
    const [pair2FirstNo, pair2SecondNo] = secondPair.split('-')
    // The one that's bigger needs to have the lowest starting number to win
    // Difference of more than 1 (one number either side)
    const pair1Wins =
      +pair1FirstNo <= +pair2FirstNo && +pair1SecondNo >= +pair2SecondNo
    const pair2Wins =
      +pair2FirstNo <= +pair1FirstNo && +pair2SecondNo >= +pair1SecondNo

    if (pair1Wins || pair2Wins) totalWinners++

    return totalWinners
  }, 0)
}

const day4pt2 = (input) => {
  return input.reduce((total, twoPairsInAString) => {
    let isOverlap = false
    const [firstPair, secondPair] = twoPairsInAString.split(',')
    // Split each pair into individual numbers
    const [pair1FirstNo, pair1SecondNo] = firstPair.split('-')
    const [pair2FirstNo, pair2SecondNo] = secondPair.split('-')

    const firstPairNumbers = []
    const secondPairNumbers = []

    for (let i = +pair1FirstNo; i <= +pair1SecondNo; i++) {
      firstPairNumbers.push(i)
    }
    for (let i = +pair2FirstNo; i <= +pair2SecondNo; i++) {
      secondPairNumbers.push(i)
    }

    firstPairNumbers.forEach((number) => {
      if (secondPairNumbers.includes(number)) isOverlap = true
    })

    if (isOverlap) total++

    return total
  }, 0)
}

module.exports = { day4, numberiser, day4pt2 }
