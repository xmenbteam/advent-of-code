const day5 = (stack, msgs) => {
  if (!stack || !msgs) return ''

  let finalString = ''

  msgs.forEach((message) => {
    const [numberOfItems, from, to] = message.match(/\d+/g)

    for (let i = 0; i < numberOfItems; i++) {
      const toMove = stack[from - 1].splice(-1)
      stack[to - 1].push(...toMove)
    }
  })

  stack.forEach((col) => {
    finalString += col[col.length - 1]
  })

  return finalString
}

const day5pt2 = (stack, msgs) => {
  if (!stack || !msgs) return ''

  let finalString = ''

  msgs.forEach((message) => {
    const [numberOfItems, from, to] = message.match(/\d+/g)

    const toMove = stack[from - 1].splice(-numberOfItems)

    stack[to - 1].push(...toMove)
  })

  stack.forEach((col) => {
    finalString += col[col.length - 1]
  })

  return finalString
}

module.exports = { day5, day5pt2 }
