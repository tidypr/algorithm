// https://school.programmers.co.kr/learn/courses/30/lessons/120840

const factorial = (n: number) => {
  return Array.from({ length: n }, (_, i) => i + 1).reduce(
    (acc, cur) => acc * cur,
    1
  );
};

function solution(balls: number, share: number) {
  return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
}

console.log(solution(3, 2));
console.log(solution(5, 3));

console.log(solution(2, 2));
console.log(solution(30, 15));


