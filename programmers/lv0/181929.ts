// https://school.programmers.co.kr/learn/courses/30/lessons/181929

function solution(num_list: number[]) {
  const multi = num_list.reduce((acc, cur) => acc * cur, 1);
  const sum = num_list.reduce((acc, cur) => acc + cur, 0);

  return multi < sum ** 2 ? 1 : 0;
}

const result1 = solution([3, 4, 5, 2, 1]);
const result2 = solution([5, 7, 8, 3]);

console.log(result1);
console.log(result2);
