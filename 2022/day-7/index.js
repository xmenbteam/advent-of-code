/**
 * How the fuck do we do this

const actions = {
    $ : {
        cd: 'do-something',
        ls: 'this is whats in the folder'
    },
    dir: 'this is a directory'
}

- If cd into a folder, add that folder to a separate array?
const foldersIamIn = ['/', 'a', 'e']
- Then add the files inside that folder to the totals in the object.
const folderContents = {
    '/': 0,
    a: 0, 
    e: 0
} etc
- Create regex for commands...
    - 'cd ..' - foldersIamIn.pop()
    - /^cd\s\D+$/ for cd into folder - action pushes folder name into foldersIamIn
    - ls - look at everything that starts with a number, loop through foldersIamIn, add it to folderContents
- Put file sizes into an array on a key in an object?
- Loop through object
- If folder sizes are < 100000, add to total

 */

const createFolderContents = (data) => {
  const cdIntoFolder = /^\$\scd\s[a-z\/]+$/
  const fileSize = /\d+/
  const moveUp = /^\$\scd\s\.{2}$/
  const folderGoingInto = (str) => str.split(' ')[2]
  const fileSizer = (str) => +str.split(' ')[0]

  const folderContents = {}
  const foldersIamIn = []

  data.forEach((command, i) => {
    if (cdIntoFolder.test(command)) {
      const folder = `${folderGoingInto(command)}${i}`
      foldersIamIn.push(folder)
      folderContents[folder] = 0
    }
    if (fileSize.test(command)) {
      const fileSize = fileSizer(command)
      foldersIamIn.forEach((folder) => {
        folderContents[folder] += fileSize
      })
    }
    if (moveUp.test(command)) {
      foldersIamIn.pop()
    }
  })
  return folderContents
}

const day7 = (data) => {
  let total = 0

  const folderContents = createFolderContents(data)

  for (let fileSize in folderContents) {
    const size = folderContents[fileSize]
    if (size <= 100000) total += size
  }

  return total
}

const sortFunc = (object) => {
  return Object.entries(object).sort(([keya, valuea], [keyb, valueb]) => {
    if (valuea < valueb) return -1
    if (valuea > valueb) return 1
    return 0
  })
}

const day7pt2 = (data) => {
  const folderContents = createFolderContents(data)

  const totalDiscSpace = 70_000_000
  const spaceNeeded = 30_000_000

  const currentUsedDiscSpace = folderContents['/0']

  const totalUnusedSpace = totalDiscSpace - currentUsedDiscSpace
  const spaceToFree = spaceNeeded - totalUnusedSpace

  const sortedData = sortFunc(folderContents)

  console.log({ currentUsedDiscSpace, spaceNeeded, sortedData })

  for (let i = 0; i < sortedData.length; i++) {
    const [key, value] = sortedData[i]
    if (value >= spaceToFree) return value
  }
}

module.exports = { day7, sortFunc, day7pt2 }
