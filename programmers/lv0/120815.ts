// https://school.programmers.co.kr/learn/courses/30/lessons/120815

function solution(n: number) {
  let count = 1;

  while ((count * 6) % n !== 0) {
    count++;
  }
  return count;
}

const result = solution(10);
console.log(result);
