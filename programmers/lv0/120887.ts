// https://school.programmers.co.kr/learn/courses/30/lessons/120887

function solution(i: number, j: number, k: number) {
  const arr = Array.from({ length: j - i + 1 }, (_, index) => index + i);
  const str = arr
    .join("")
    .split("")
    .filter((x) => x === `${k}`);

  return str.length;
}

solution(10, 50, 5);
