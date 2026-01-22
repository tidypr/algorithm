// https://school.programmers.co.kr/learn/courses/30/lessons/120897

function solution(n: number) {
  const answer = [];
  for (let i = 1; i < n + 1; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }
  return answer;
}
