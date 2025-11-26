// https://school.programmers.co.kr/learn/courses/30/lessons/120585

function solution(array: number[], height: number) {
  let answer = 0;
  for (let ar of array) {
    if (ar > height) answer++;
  }
  return answer;
}

const result1 = solution([149, 180, 192, 170], 167);
const result2 = solution([180, 120, 140], 190);

console.log(result1);
console.log(result2);
