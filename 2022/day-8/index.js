/**

Check 4 things:

Is the number the biggest SO FAR - keep max
Is the number the biggest IN TOTAL

 */

const rowOfTreesVisible = (currentTreeHeight, trees, i) => {
  const leftTrees = trees.slice(0, i)
  const rightTrees = trees.slice(i + 1)

  let isVisible = false
  const leftTreeMax = Math.max(...leftTrees)
  const righTreeMax = Math.max(...rightTrees)

  if (currentTreeHeight > leftTreeMax || currentTreeHeight > righTreeMax)
    isVisible = true

  leftTrees.push(rightTrees.shift())

  return isVisible
}

const columnOfTreesFromRow = (currentTreeHeight, trees, index) => {
  const treeColumn = trees.reduce((output, treeString, i, array) => {
    if (i === 0 || i === array.length - 1) return output
    else output.push(+treeString[index])
    return output
  }, [])

  return rowOfTreesVisible(currentTreeHeight, treeColumn, index)
}

const day8 = (input) => {
  return input.reduce((sum, row, i, arr) => {
    const trees = row.split('')

    const length = arr.length
    if (i === 0) {
      return sum + length
    }
    if (i === arr.length - 1) {
      return sum + length
    }

    trees.forEach((currentTreeHeight, i, treeArr) => {
      if (i === 0 || i === treeArr.length - 1) {
        sum++
      } else {
        const isVisibleRow = rowOfTreesVisible(currentTreeHeight, trees, i)
        const isVisibleColumn = columnOfTreesFromRow(
          currentTreeHeight,
          input,
          i
        )
        if (isVisibleRow || isVisibleColumn) sum++
      }
    })
    return sum
  }, 0)
}

module.exports = { day8, columnOfTreesFromRow }
