const { data } = require("./data/1");

const checkIfHiger = (array) => {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i - 1]) count++;
  }

  console.log(count);
  return count;
};

// checkIfHiger(data);

const checkThrees = (array) => {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (
      array[i] + array[i + 1] + array[i + 2] <
      array[i + 1] + array[i + 2] + array[i + 3]
    )
      count++;
  }
  console.log(count);
  return count;
};

checkThrees(data);
