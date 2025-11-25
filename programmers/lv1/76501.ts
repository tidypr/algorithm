// https://school.programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes: number[], signs: boolean[]) {
  let sum = 0;

  for (const [index, absol] of absolutes.entries()) {
    signs[index] ? (sum += absol) : (sum -= absol);
  }

  return sum;
}

console.log(solution([4, 7, 12], [true, false, true]));
