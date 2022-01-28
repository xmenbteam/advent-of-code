const fs = require("fs");
const nums = require("./data/4-nums");

fs.readFile("./data/3-boards.txt", "utf-8", (err, data) => {
  if (err) console.log({ err });
  else {
    const boxList = data.split("\n\n");

    const table = boxList.map((boxString, boxIndex) => {
      const lineArray = boxString.split("\n");
      //   console.log({ lineArray });
      const numbers = lineArray.map((line) => {
        const characters = line.split(" ");
        const bingoNums = [];
        characters.forEach((char) => {
          if (char.length > 0) bingoNums.push(Number(char));
        });
        return {
          bingoNums,
          rowCount: 0,
        };
      });

      const boardObj = {
        boardNum: boxIndex,
        gameBoard: numbers,
        colCount: {
          0: 0,
          1: 0,
          2: 0,
          3: 0,
          4: 0,
        },
      };

      return boardObj;
    });
    // bingo numbers
    for (let i = 0; i < nums.length; i++) {
      // boards

      table.forEach((board) => {
        // console.log({ board }, "THIS", board.gameBoard.rowCount);
        board.gameBoard.forEach((line) => {
          line.bingoNums.forEach((num, ind) => {
            if (nums[i] === num) {
              //   console.log(line.rowCount);
              line.rowCount++;
              board.colCount[ind.toString()]++;
              if (line.rowCount === 5 || board.colCount[ind.toString()] === 5) {
                const message = `BINGO! ${board.boardNum} wins! Winning number ${nums[i]}, NUMBER ${i}`;
                fs.appendFile(
                  "bingWinners.js",
                  JSON.stringify({ message }),
                  (err) => {
                    if (err) console.log({ err });
                  }
                );
                console.log({ board: board.boardNum === 15 });
              }
            }
          });
        });
      });
      // lines
    }

    const calledNums = [
      91, 17, 64, 45, 8, 13, 47, 19, 52, 68, 63, 76, 82, 44, 28, 56, 37, 2, 78,
      48, 32, 58, 72, 53, 9, 85, 77,
    ];

    const tableNums = [
      82, 5, 38, 41, 95, 70, 52, 11, 21, 51, 81, 20, 0, 14, 83, 57, 36, 60, 59,
      42, 77, 13, 85, 32, 63,
    ];

    const filteredNums = tableNums.filter((number) => {
      if (calledNums.indexOf(number) === -1) {
        return number;
      }
    });

    const sum = filteredNums.reduce((a, b) => {
      return a + b;
    });

    console.log({ sum });

    console.log(sum * 77);
  }
});
