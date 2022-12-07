exports.binaryDiagnostic = (data) => {
  if (!data) return 0
  const refObj = {
    1: 1,
    0: -1
  }
  //   let count = 0;

  let gamma = ''
  let epsilon = ''

  for (let i = 0; i < data.length; i++) {
    let count = 0
    let str = data[i]
    for (let j of str) {
      count += refObj[data[i][j]]
    }
    count > 0 ? (gamma += '1') : (gamma += '0')
    // console.log(gamma);
  }
  // console.log(gamma);
}
