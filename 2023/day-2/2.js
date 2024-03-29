const infoGetter = string => {
  const id = +string.match(/\d+/g)[0]
  const handfuls = string
    .split(':')[1]
    .split(';')
    .map(str => str.replace(' ', '').split(','))

  return { id, handfuls }
}
const bitsGetter = cube => {
  const bits = cube.trim().split(' ')

  const number = +bits[0]
  const colour = bits[1]

  return { number, colour }
}

exports.day2 = (data) => {
  const possibeNumbers = {
    red: 12,
    green: 13,
    blue: 14
  }

  return data.reduce((total, string) => {
    let isPossible = true

    const { id, handfuls } = infoGetter(string)

    handfuls.forEach(handful => {
      handful.forEach(cube => {
        const { number, colour } = bitsGetter(cube)

        if (possibeNumbers[colour] < number) isPossible = false
      })
    })
    return isPossible ? total += id : total
  }, 0)
}

exports.day2pt2 = (data) => {
  return data.reduce((total, string) => {
    const colours = {
      red: 0,
      blue: 0,
      green: 0
    }

    const { handfuls } = infoGetter(string)

    handfuls.forEach(handful => {
      handful.forEach(cube => {
        const { number, colour } = bitsGetter(cube)

        if (number > colours[colour]) colours[colour] = number
      })
    })
    total += (colours.red * colours.blue * colours.green)
    return total
  }, 0)
}