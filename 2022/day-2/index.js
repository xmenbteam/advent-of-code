/*

First column - opponent
A - rock
B - Paper
C - Scissors

Second Column - player
X - Rock - 1
Y - Paper - 2
Z - scissors - 3

Loss - 0
Draw - 3
Win - 6

const Win = ['A Y', 'B Z', 'C X']
const Lose = ['B X', 'C Y', 'A Z']
const Draw = ['A X', 'B Y', 'C Z']
const scores = [null, 'X', 'Y', 'Z']


 */

exports.day2 = (data) => {
  if (!data) return 0

  const scores = [null, 'X', 'Y', 'Z']

  const Win = ['A Y', 'B Z', 'C X']
  const Lose = ['B X', 'C Y', 'A Z']
  const Draw = ['A X', 'B Y', 'C Z']

  const result = data.reduce((total, current) => {
    if (Win.includes(current)) total += 6
    if (Lose.includes(current)) total += 0
    if (Draw.includes(current)) total += 3

    scores.forEach((score, i) => {
      if (score === current[2]) total += i
    })

    return total
  }, 0)

  return result
}

exports.day2pt2 = (input) => {
  if (!input) return 0

  const combos = {
    'A X': 3,
    'A Y': 4,
    'A Z': 8,
    'B X': 1,
    'B Y': 5,
    'B Z': 9,
    'C X': 2,
    'C Y': 6,
    'C Z': 7
  }

  return input.reduce((sum, current) => {
    sum += combos[current]

    return sum
  }, 0)
}
