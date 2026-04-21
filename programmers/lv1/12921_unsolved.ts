// https://school.programmers.co.kr/learn/courses/30/lessons/12921

function solution(n: number) {
  let result = 0;

  for (let i = 2; i <= n; i++) {
    let primecheck = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        primecheck++;
      }
    }
    primecheck === 2 ? result++ : null;
  }

  return result;
}

console.log(solution(10));
console.log(solution(5));

// ==================== TIME OUT ====================
