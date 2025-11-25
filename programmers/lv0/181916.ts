// https://school.programmers.co.kr/learn/courses/30/lessons/181916

// valuse case
// a: 4
// b: 3 1
// c: 2 2
// d: 2 1 1
// e: 1 1 1 1

// const switchCase = (countNum) => {
//   Object.values(countNum).includes(4)
//     case arrNum:
//  }

function solution(...rest: number[]) {
  const countNum: { [key: string]: number } = {};

  for (let i = 0; i < rest.length; i++) {
    countNum[rest[i]] ? countNum[`${rest[i]}`]++ : (countNum[`${rest[i]}`] = 1);
  }

  // console.log(Object.values(countNum));
  const values: number[] = Object.values(countNum);

  if (values.every((x) => x === 4)) {
    // 숫자 * 1111
    // console.log("CASE: a: 4");
    return +Object.keys(countNum)[0] * 1111;
  } else if (values.includes(3)) {
    // console.log("CASE: b: 3 1");
    const num3q = [...Object.entries(countNum)].filter((x) => {
      // console.log(x);
      // console.log(x[1] !== 3);
      return x[1] !== 3;
    });
    console.log(`num3`);
    // console.log(num3);
    const num1p = [...Object.entries(countNum)].filter((x) => {
      // console.log(x);
      // console.log(x[1] !== 3);
      return x[1] !== 1;
    });
    console.log(`num1`);
    console.log(num1p[0][0]);

    return (10 * +num1p[0][0] + +num3q[0][0]) ** 2;
  } else if (values.every((x) => x === 2)) {
    // console.log("CASE: c: 2 2");
    const values = [...Object.keys(countNum)];
    const sum = +values[0] + +values[1];
    const sub = Math.abs(+values[0] - +values[1]);
    return sum * sub;
  } else if (values.length === 3) {
    // console.log("CASE: d: 2 1 1");
    const count1 = [...Object.entries(countNum)].filter((x) => {
      // console.log(x);
      // console.log(x[1] !== 2);
      return x[1] !== 2;
    });
    const result = [...count1].reduce((arr, cur) => +arr * +cur[0], 1);
    return result;
  } else if (values.every((x) => x === 1)) {
    // 가장 작은 숫자
    console.log("CASE: e: 1 1 1 1");
    const min = [...Object.keys(countNum).map((x) => +x)];
    return Math.min(...min);
  }

  // const values = [...Object.keys(countNum)];
  // const values = [...Object.values(countNum)];
  // const entries = [...Object.entries(countNum)];
  // console.log(entries);
}

const result1 = solution(2, 2, 2, 2);
const result2 = solution(4, 1, 4, 4);
const result3 = solution(6, 3, 3, 6);
const result4 = solution(2, 5, 2, 6);
const result5 = solution(6, 4, 2, 5);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
