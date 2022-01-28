const data = require("./data/2");

const arrObj = data.map((directionStr) => {
  const direction = directionStr.split(" ")[0];
  const distance = Number(directionStr.split(" ")[1]);
  return { direction, distance };
});

let horizontal = 0;
let depth = 0;
let aim = 0;

arrObj.map((dir) => {
  if (dir.direction === "forward") {
    horizontal += dir.distance;
    depth += aim * dir.distance;
  }

  if (dir.direction === "down") {
    aim += dir.distance;
  }

  if (dir.direction === "up") {
    aim -= dir.distance;
  }
});

console.log({ horizontal, depth, aim });

console.log(horizontal * depth);
