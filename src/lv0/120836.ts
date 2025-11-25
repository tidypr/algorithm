// https://school.programmers.co.kr/learn/courses/30/lessons/120836

function solution(n: number) {
  let count = 0;

  for (let i = 1; i < n + 1; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  return count;
}

const result = solution(20);
console.log(result);
