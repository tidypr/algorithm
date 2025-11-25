// https://school.programmers.co.kr/learn/courses/30/lessons/120910

function solution(n: number, t: number) {
  let answer = n;
  for (let i = 1; i <= t; i++) {
    answer *= 2;
  }
  return answer;
}
