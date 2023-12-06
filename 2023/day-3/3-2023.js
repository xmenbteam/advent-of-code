const getSymbolsAndCoordinates = data => data.reduce((symbols, row, y) => {
  row.split('').forEach((character, x) => {
    if (!/\d|\./.test(character)) {
      symbols.push({
        symbol: character, symbolX: x, symbolY: y
      })
    }
  })
  return symbols
}, [])

const getNumbersAndCoordinates = data => data.reduce((numbers, row, y) => {
  const numbersInRow = row.matchAll(/\d+/g)

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

exports.day3pt2 = (data) => {
  const symbolsAndCoordinates = getSymbolsAndCoordinates(data)
  const numbersAndCoordinates = getNumbersAndCoordinates(data)

  let total = 0
  let foundNumber = undefined

  console.log({ symbolsAndCoordinates, numbersAndCoordinates })

  numbersAndCoordinates.forEach((numberInfo) => {
    const { number, startsAtX, endsAtX, numberY } = numberInfo
    symbolsAndCoordinates.forEach((symbolInfo) => {
      const { symbolX, symbolY } = symbolInfo

      const isAdjacentY = Math.abs(numberY - symbolY) === 2
      const isAdjacentX = symbolX - endsAtX === 1 || startsAtX - symbolX === 1

      if (isAdjacentX && !foundNumber) {
        total = +number
        foundNumber = numberInfo
        return
      }
      if (isAdjacentX && foundNumber) {
        total = total * number
        foundNumber = undefined
        return
      }

      // if (
      //   isAdjacentY && startsAtX === symbolX && !foundNumber) {
      //   total = +number
      //   foundNumber = number
      //   return
      // }
      // if (isAdjacentY && foundNumber) {
      //   total = total * number
      //   foundNumber = undefined
      //   return
      // }
    })
  })

  return total
}