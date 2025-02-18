// power : a의 b승
// FS-570ES
// 기능이 업그레이드된 고급 계산기

import { add, subtract, multiply, divide } from "./calculator.js";

const name = "FS-570ES";

const power = (x, y) => {
  let result = 1;
  for (let i = 1; i <= y; i++) {
    result *= x;
  }
  return result;
};

export default name;
export { add, subtract, multiply, divide, power };
