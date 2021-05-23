const { loan, sumDoneLocal } = require("./loan");

// 输入: 总房价、建筑面积
// 二期：单价升值区间： uptoArr = [1.3, 1.4, 1.5, 1.7, 1.9, 2.3, 2.7]
// 计算基数： w = 万
// 服务费比例
const Service_Percent = 0.025;
// 税费
// todo: 税费细化：满五唯一。。
const Tax = 1.4417 + 0.7208 + 0.4826 + 0.3 + 2.7 + 0.1;
// 投入
const All = 50;
// 租金
const rent = 0.18;

const IS_PROD = process.env.MODE;
const invest = (sumPrice, area, uptoArr = [1.5, 1.6, 1.7, 1.9, 2.3, 2.7]) => {
  console.log("————————————————");
  console.log("当前计算：总价 面积 升值区间");
  console.log("当前计算：", sumPrice, area, uptoArr);
  // 服务费 2.7个点 = 总价 * 比例
  const service = sumPrice * Service_Percent;
  !IS_PROD && console.log("服务费", service);
  // 其他：税费等 1w
  const tax = Tax;
  !IS_PROD && console.log("其他：税费等", tax);
  // 首付 = 所有 - 服务费 - 税费等
  const first = priceIn - service - tax;
  !IS_PROD && console.log("首付", first);
  // 贷款 = 总价 - 首付
  const toLoanLocal = sumPrice - first;
  !IS_PROD && console.log("贷款", toLoanLocal);
  // 月供
  const eachMonth = loan(toLoanLocal)[0];
  !IS_PROD && console.log("月供", eachMonth);
  // 两年后：
  // 还款 = 月供 * 24月
  const doneLoan = eachMonth * 24;
  !IS_PROD && console.log("还款", doneLoan);
  // 还款中本金
  const doneLocal = sumDoneLocal(toLoanLocal, 24);
  !IS_PROD && console.log("还款中本金", doneLocal);
  // 欠款
  const todoLocal = toLoanLocal - doneLocal;
  !IS_PROD && console.log("欠款", todoLocal);
  // 已支出 = 首付 + 服务费 + 税费等 + 还款
  const alreadyOut = first + service + tax + doneLoan;
  !IS_PROD && console.log("已支出", alreadyOut);
  // 总支出 = 已支出 + 欠款
  const priceInOut = alreadyOut + todoLocal;
  !IS_PROD && console.log("总支出", priceInOut);
  const actualInArr = [];
  // 涨幅 uptoArr
  uptoArr.forEach((upto) => {
    !IS_PROD && console.log("\n\n -----升值到: ", upto);
    // 总售价
    const uptoSumPrice = area * upto;
    !IS_PROD && console.log("总售价", uptoSumPrice);
    // 实赚
    const actualIn = uptoSumPrice - allOut + rent * 24;
    !IS_PROD && console.log("实赚", actualIn);
    actualInArr.push(actualIn);
  });
  console.log("当前计算升值: ", uptoArr);
  console.log("所有实赚结果: ", actualInArr);
};

// console.log(invest(80, 71));
// console.log(invest(85, 79.56));
// console.log(invest(90, 79.56));
// console.log(invest(105, 87.96));
console.log(invest(110, 81.45));
