// https://school.programmers.co.kr/learn/courses/30/lessons/87389

function solution(n: number) {
  let numArr: number[] = [];

  for (let i = n; i > 1; i--) {
    // console.log(i);
    if ((n - 1) % i === 0) {
      numArr.push(i);
    }
  }

  return Math.min(...numArr);
}

console.log(solution(10));
console.log(solution(12));
