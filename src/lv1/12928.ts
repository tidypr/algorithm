// https://school.programmers.co.kr/learn/courses/30/lessons/12928

function solution(n: number) {
  let answer: number[] = [];
  for (let i = 0; i < n + 1; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }

  return answer.reduce((a, b) => a + b, 0);
}
