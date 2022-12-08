/**

Check 4 things:

Is the number the biggest SO FAR - keep max
Is the number the biggest IN TOTAL

 */

const day8 = (input) => {
  return input.reduce((sum, row, i, arr) => {
    const trees = row.split('')
    const leftTrees = []
    const rightTrees = trees.map((tree) => +tree)
    const length = arr.length
    if (i === 0) {
      return sum + length
    }
    if (i === arr.length - 1) {
      return sum + length
    }

    rightTrees.forEach((currentTreeHeight, i, treeArr) => {
      if (i === 0) sum++
      else if (i === treeArr.length - 1) sum++
      else {
        let isVisible = false
        const leftTreeMax = Math.max(leftTrees)
        const righTreeMax = Math.max(rightTrees)

        if (currentTreeHeight > leftTreeMax || currentTreeHeight > righTreeMax)
          isVisible = true

        console.log(isVisible)

        leftTrees.push(rightTrees.shift())
        console.log({ currentTreeHeight, leftTrees, rightTrees })
        if (isVisible) sum++
      }
    })
    return sum
  }, 0)
}

module.exports = { day8 }
