// https://school.programmers.co.kr/learn/courses/30/lessons/120848

function solution(n: number) {
  let result = 1;
  let num = 1;

  while (result <= n) {
    result *= num + 1;
    num++;
  }

  return num-1;
}

console.log(solution(3628800));
console.log(solution(7));
