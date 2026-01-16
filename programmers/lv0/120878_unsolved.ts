// https://school.programmers.co.kr/learn/courses/30/lessons/120878

const div = (x: number, y: number) => {
  let max = Math.max(x, y);

  for (let i = max; i > 1; i--) {
    if (x % i === 0 && y % i === 0) {
      x /= i;
      y /= i;
    }
  }

  return [x, y];
};

function solution(a: number, b: number) {
  let x;
  let y;

  while (a !== x) {
    [x, y] = div(a, b);
  }
  console.log(a, b);

  if (b % 2 === 0 || b % 5 === 0) {
    return 1;
  } else {
    return 2;
  }
}

console.log(solution(7, 20));
console.log(solution(11, 22));
console.log(solution(12, 21));
console.log(solution(36, 63));
