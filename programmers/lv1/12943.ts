// https://school.programmers.co.kr/learn/courses/30/lessons/12943

function solution(num: number) {
  let result = num;
  let count = 0;

  while (result !== 1) {
    // MAX 500
    if (count > 500) return -1;

    if (result % 2 === 0) {
      result /= 2;
    } else {
      result = result * 3 + 1;
    }

    count++;
  }

  return count;
}

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));
