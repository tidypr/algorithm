// https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution(k: number, tangerine: number[]) {
  const arr = [];

  for (const t of tangerine) {
    if (arr[t]) {
      arr[t] += 1;
    } else {
      arr[t] = 1;
    }
  }

  arr.sort((a, b) => b - a);

  let sum = 0;
  let cnt = 0;

  for (const a of arr) {
    sum += a;
    cnt++;
    if (sum >= k) {
      return cnt;
    }
  }
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));
