// https://school.programmers.co.kr/learn/courses/30/lessons/181899

function solution(start_num: number, end_num: number) {
  const answer = [];

  for (let i = start_num; i >= end_num; i--) {
    answer.push(i);
  }

  return answer;
}

const result = solution(10, 3);
console.log(result);
