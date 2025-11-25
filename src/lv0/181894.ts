// https://school.programmers.co.kr/learn/courses/30/lessons/181894

function solution(arr: number[]) {
  let firstIndex: number = arr.indexOf(2);
  let secondIndex: number = arr.lastIndexOf(2);

  const result = arr.slice(firstIndex, secondIndex + 1);

  return result.length !== 0 ? result : [-1];
}

const result1 = solution([1, 2, 1, 4, 5, 2, 9]);
console.log(result1);
const result2 = solution([1, 2, 1]);
console.log(result2);
const result3 = solution([1, 1, 1]);
console.log(result3);
const result4 = solution([1, 2, 1, 2, 1, 10, 2, 1]);
console.log(result4);
