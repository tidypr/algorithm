// https://school.programmers.co.kr/learn/courses/30/lessons/120868

function solution(sides: number[]) {
  // 가장 긴변 < 다른 두변 합
  let cnt = 0;

  // side에 가장 긴변이 포함된 경우
  let max = Math.max(...sides);
  let min = Math.min(...sides);
  let rest = Math.max(...sides);

  while (rest + min > max) {
    rest--;
    cnt++;
  }

  let sum = sides.reduce((acc, cur) => acc + cur, 0);
  // side에 가장 기변이 없는 경우
  for (let i = max + 1; i < sum; i++) {
    cnt++;
  }
  return cnt;
}

console.log(solution([1, 2]));
console.log(solution([3, 6]));
console.log(solution([11, 7]));
