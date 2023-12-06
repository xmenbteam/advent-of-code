const getSymbolsAndCoordinates = data => data.reduce((symbols, row, y) => {
  row.split('').forEach((character, x) => {
    if (character !== '.' && !/\d/.test(character)) {
      symbols.push({
        symbol: character, symbolX: x, symbolY: y
      })
    }
  })
  return symbols
}, [])

const getNumbersAndCoordinates = data => data.reduce((numbers, row, y) => {
  const numbersInRow = row.matchAll(/[0-9]+/g)

  for (const num of numbersInRow) {
    numbers.push({
      number: num[0],
      startsAtX: num.index,
      endsAtX: num.index + num[0].length - 1,
      numberY: y
    })
  }

  return numbers
}, [])

exports.day3 = (data) => {
  let total = 0

  const symbolsAndCoordinates = getSymbolsAndCoordinates(data)
  const numbersAndCoordinates = getNumbersAndCoordinates(data)

  numbersAndCoordinates.forEach(({ number, startsAtX, endsAtX, numberY }) => {
    symbolsAndCoordinates.forEach(({ symbolX, symbolY }) => {

      const isAdjacentY = Math.abs(numberY - symbolY) <= 1
      const isAdjacentX = symbolX - endsAtX === 1 || startsAtX - symbolX === 1

      if (isAdjacentX && isAdjacentY) {
        total += +number
      }
      if (symbolX <= endsAtX && symbolX >= startsAtX && isAdjacentY) {
        total += +number
      }
    })
  })

  return total
}