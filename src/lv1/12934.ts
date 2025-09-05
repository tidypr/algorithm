// https://school.programmers.co.kr/learn/courses/30/lessons/12934

function solution(n: number) {
  const q = Math.sqrt(n);
  return q % Math.floor(q) === 0 ? (q + 1) ** 2 : -1;
}

solution(3);
