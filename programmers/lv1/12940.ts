// https://school.programmers.co.kr/learn/courses/30/lessons/12940

function solution(n: number, m: number) {
  let minD = 1;
  let maxM = 1000000 ** 2;

  for (let i = 1; i < maxM; i++) {
    if (n % i === 0 && m % i === 0) {
      minD = Math.max(minD, i);
    }

    if (i % n === 0 && i % m === 0) {
      maxM = Math.min(maxM, i);
    }
  }

  return [minD, maxM];
}

console.log(solution(3, 12));
console.log(solution(2, 5));
