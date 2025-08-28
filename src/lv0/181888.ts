// https://school.programmers.co.kr/learn/courses/30/lessons/181888

function solution(num_list: number[], n: number) {
  let answer = [];

  for (let i = 0; i < num_list.length; i += n) {
    answer.push(num_list[i]);
  }
  return answer;
}

const result1 = solution([4, 2, 6, 1, 7, 6], 2);
const result2 = solution([4, 2, 6, 1, 7, 6], 4);
console.log(result1);
console.log(result2);
