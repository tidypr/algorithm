// https://school.programmers.co.kr/learn/courses/30/lessons/181927

function solution(num_list: number[]) {
  const prevlast = num_list[num_list.length - 2];
  const last = num_list[num_list.length - 1];

  const answer = prevlast < last ? last - prevlast : last * 2;
  return [...num_list, answer];
}

const result1 = solution([2, 1, 6]);
const result2 = solution([5, 2, 1, 7, 5]);

console.log(result1);
console.log(result2);
