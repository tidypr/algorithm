// https://school.programmers.co.kr/learn/courses/30/lessons/181887

function solution(num_list: number[]) {
  const evenNum = num_list.filter((x, index) => index % 2 === 0).reduce((arr, cur) => arr + cur, 0);
  const oddNum = num_list.filter((x, index) => index % 2 !== 0).reduce((arr, cur) => arr + cur, 0);

  return evenNum > oddNum ? evenNum : oddNum;
}

const result1 = solution([4, 2, 6, 1, 7, 6]);
console.log(result1);
const result2 = solution([-1, 2, 5, 6, 3]);
console.log(result2);
