// https://school.programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers: number[]) {
  const arr10 = Array.from({ length: 9 }, (_, index) => index + 1);
  const result = arr10.filter((x) => !numbers.includes(x));
  return result.reduce((acc, aur) => acc + aur, 0);
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
console.log(solution([5, 8, 4, 0, 6, 7, 9]));
