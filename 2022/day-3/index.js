const letterValueFinder = (string) => {
  if (!string) return 0
  if (string.charCodeAt(0) >= 97 && string.charCodeAt(0) <= 122)
    return string.charCodeAt(0) - 96

  if (string.charCodeAt(0) >= 65 && string.charCodeAt(0) <= 90)
    return string.charCodeAt(0) - 38
}

const duplicateFinder = (string1, string2) => {
  if (!string1 || !string2) return ''
  let char = ''
  for (let i = 0; i < string1.length; i++) {
    if (string2.indexOf(string1[i]) !== -1) char += string1[i]
  }
  return char
}

const threeWaySplitter = (array) => {
  const output = []
  while (array.length) output.push(array.splice(0, 3))
  return output
}

const triplicateFinder = (array) => {
  const letter = duplicateFinder(array[0], array[1])
  const result = duplicateFinder(letter, array[2])
  return result[0]
}

const day3 = (input) => {
  return input.reduce((total, string) => {
    const firstHalf = string.slice(0, string.length / 2)
    const secondHalf = string.slice(string.length / 2)

    const letterInCommon = duplicateFinder(firstHalf, secondHalf)
    total += letterValueFinder(letterInCommon)
    return total
  }, 0)
}

const day3pt2 = (array) => {
  const triplicated = threeWaySplitter(array)

  return triplicated.reduce((sum, curr) => {
    const letter = triplicateFinder(curr)
    const value = letterValueFinder(letter)
    sum += value
    return sum
  }, 0)
}

module.exports = {
  day3,
  letterValueFinder,
  duplicateFinder,
  threeWaySplitter,
  triplicateFinder,
  day3pt2
}
