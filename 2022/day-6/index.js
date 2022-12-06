const day6 = (input) => {
  for (let i = 0; i < input.length; i++) {
    const slice = input.slice(i, i + 4)

    const isUnique = Array.from(new Set(slice.split(''))).length === 4

    if (isUnique) return i + 4
  }
}

const day6pt2 = (input) => {
  for (let i = 0; i < input.length; i++) {
    const slice = input.slice(i, i + 14)

    const isUnique = Array.from(new Set(slice.split(''))).length === 14

    if (isUnique) return i + 14
  }
}

module.exports = { day6, day6pt2 }
