// https://school.programmers.co.kr/learn/courses/30/lessons/120583

function solution(array: number[], n: number) {
  const filterArr = array.filter((x) => x === n);
  return filterArr.length;
}

const result1 = solution([1, 1, 2, 3, 4, 5], 1);
const result2 = solution([0, 2, 3, 4], 1);

console.log(result1);
console.log(result2);
