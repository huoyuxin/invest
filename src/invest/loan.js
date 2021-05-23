// 等额本息
const loan_1 = (_sumLoan, _monthIndex, _percent = 5.39, _year = 10) => {
  //   console.log(_sumLoan, _monthIndex);
  // 转换成 元
  const sumLoan = _sumLoan * 10000;
  const percent = _percent / 100;
  const months = _year * 12;
  const monthPercent = percent / 12;
  // 月供
  const eachMonth =
    (sumLoan * monthPercent * Math.pow(1 + monthPercent, months)) /
    (Math.pow(1 + monthPercent, months) - 1);
  // 月利息
  const eachExtra =
    (sumLoan * monthPercent - eachMonth) *
      Math.pow(1 + monthPercent, _monthIndex - 1) +
    eachMonth;
  // 月供本金
  const eachLocal = eachMonth - eachExtra;
  //   console.log(eachLocal, eachExtra);
  // 转换成 万
  return [eachMonth / 10000, eachLocal / 10000];
};

// ✅ 等额本金
// _monthIndex: 第n个月 = n
const loan_2 = (_sumLoan, _monthIndex, _percent = 5.39, _year = 10) => {
  // 转换成 元
  const sumLoan = _sumLoan * 10000;
  const percent = _percent / 100;
  const months = _year * 12;
  const monthPercent = percent / 12;
  //   console.log(sumLoan, percent, months, monthPercent);
  // 每月本金
  const eachMonthLocal = sumLoan / months;
  const eachMonth =
    eachMonthLocal +
    (sumLoan - eachMonthLocal * (_monthIndex - 1)) * monthPercent;
  // 转换成 万
  return [eachMonth / 10000, eachMonthLocal / 10000];
};

const chooseLoan = loan_1;

const sumDoneLocal = (_sumLoan, _monthIndex) => {
  let sum = 0;
  for (let i = 1; i <= _monthIndex; i++) {
    sum += chooseLoan(_sumLoan, i)[1];
  }
  return sum;
};
console.log(sumDoneLocal(40, 2));

module.exports = {
  loan: chooseLoan,
  sumDoneLocal
};
