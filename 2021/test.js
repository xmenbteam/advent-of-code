const lines = [
  [83, 40, 67, 98, 4],
  [50, 74, 31, 30, 3],
  [75, 64, 79, 61, 5],
  [12, 59, 26, 25, 72],
  [36, 33, 18, 54, 10],
  [68, 56, 28, 57, 12],
  [78, 66, 20, 85, 51],
  [35, 23, 7, 99, 44],
  [86, 37, 8, 45, 49],
  [40, 77, 32, 6, 88],
];

const boardMaker = (lines) => {
  const table = [];

  const board = [];
  for (let i = 0; i < 5; i++) {
    board.push(lines[i]);
    if (board.length === 5) {
      table.push(board);
      console.log({ table });
      lines.shift();
      lines.shift();
      lines.shift();
      lines.shift();
      lines.shift();
      if (lines.length > 0) {
        // console.log("INSIDE LENGTH IF", table);
        return boardMaker(lines);
      }
      console.log("OUTSIDE", table);
      return table;
    }
  }
};

boardMaker(lines);
