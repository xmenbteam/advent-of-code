const { day1, day1pt2 } = require("./");
const { data, smallData } = require("./data");

describe("day 1", () => {
  test("returns a number", () => {
    const expected = "number";
    const actual = day1();
    expect(typeof actual).toBe(expected);
  });
  test("returns the total from an array", () => {
    const input = [[1], [1, 1], [1, 1, 1]];
    const expected = 3;
    const actual = day1(input);
    expect(actual).toBe(expected);
  });
  test("More Complex data", () => {
    const expected = 66306;
    const actual = day1(data);
    expect(actual).toBe(expected);
  });
});

describe("day 1 pt 2", () => {
  test("returns a number", () => {
    const expected = "number";
    const actual = day1pt2();
    expect(typeof actual).toBe(expected);
  });
  test("returns total number of 3 arrays", () => {
    const input = [[1], [1, 2], [1]];
    const expected = 5;
    const actual = day1pt2(input);
    expect(actual).toBe(expected);
  });
  test("returns top 3 highest from 4 elements", () => {
    const input = [[1, 2], [1, 2], [1], [1, 2]];
    const expected = 9;
    const actual = day1pt2(input);
    expect(actual).toBe(expected);
  });
  test("actual data", () => {
    // const input = [[1, 2], [1, 2], [1], [1, 2]];
    const expected = 195292;
    const actual = day1pt2(data);
    expect(actual).toBe(expected);
  });
});
