// https://school.programmers.co.kr/learn/courses/30/lessons/181901

function solution(n: number, k: number) {
  const answer = [];

  for (let i = 0; i < n + 1; i++) {
    if (i % k === 0 && i !== 0) {
      answer.push(i);
    }
  }

  return answer;
}

const result1 = solution(10, 3);
console.log(result1);
const result2 = solution(15, 5);
console.log(result2);
