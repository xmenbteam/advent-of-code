const day1 = (data) => {
  return data.reduce((total, current) => {
    const numbers = current.match(/\d/g)
    if (numbers) {
      const numberToAdd = parseInt(numbers[0] + numbers[numbers.length - 1])

      total += numberToAdd
    }

    return total
  }, 0)
}

const values = [
  null, 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
]

const day1pt2 = (data) => {
  return data
    .reduce((total, current) => {
      values.forEach(value => {
        current = current.replace(value, (matched) => {
          return matched + values.indexOf(matched) + matched
        })
      })
      console.log(current)
      // match either a number or one of the strings
      const numbers = current.match(/\d/g)
      if (numbers) {
        let firstNumber = numbers[0]
        let lastNumber = numbers[numbers.length - 1]
        // If one of the numbers is a string, get it from the refObj
        if (/one|two|three|four|five|six|seven|eight|nine/.test(firstNumber)) firstNumber = values.indexOf(firstNumber)
        if (/one|two|three|four|five|six|seven|eight|nine/.test(lastNumber)) lastNumber = values.indexOf(lastNumber)

        total += +`${firstNumber}${lastNumber}`
      }

      return total
    }, 0)
}

module.exports = { day1, day1pt2 }