// https://school.programmers.co.kr/learn/courses/30/lessons/181920

function solution(start_num: number, end_num: number) {
  let answer: number[] = [];

  for (let i = start_num; i <= end_num; i++) {
    answer.push(i);
  }

  return answer;
}

const result = solution(3, 10);
console.log(result);
