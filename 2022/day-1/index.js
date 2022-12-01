exports.day1 = (data) =>
  data
    ? data.reduce((sum, basket) => {
        let current = 0;
        basket.forEach((item) => (current += item));

        if (current > sum) sum = current;

        return sum;
      }, 0)
    : 0;

exports.day1pt2 = (data) => {
  if (!data) return 0;
  const totals = data
    .map((basket) => basket.reduce((acc, item) => acc + item))
    .sort((a, b) => b - a);

  return totals[0] + totals[1] + totals[2];
};
