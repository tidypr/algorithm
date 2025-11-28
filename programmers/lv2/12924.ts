// https://school.programmers.co.kr/learn/courses/30/lessons/12924

const sum = (startNum: number, max: number) => {
  let sum = 0;
  // let arr = [];

  while (true) {
    sum += startNum;
    startNum++;

    // arr.push(startNum++);
    // sum = arr.reduce((acc, cur) => acc + cur, 0);

    if (sum === max) {
      return true;
    } else if (sum > max) {
      return false;
    }
  }
};

function solution(n: number) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    const is15 = sum(i, n);
    if (is15) {
      count++;
    }
  }

  return count;
}

// console.time("fn1");
console.log(solution(15));
// console.timeEnd("fn1");

// timeout: test1, test2, test5
