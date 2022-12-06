const day6 = (input) => {
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const array = []
    array.push(input[i], input[i + 1], input[i + 2], input[i + 3])
    console.log(array)
  }
}

module.exports = { day6 }
