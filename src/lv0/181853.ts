// https://school.programmers.co.kr/learn/courses/30/lessons/181853?language=javascript

function solution(num_list: number[]): number[] {
  let answer: number[] = [];

  const sorted = num_list.sort((a, b) => a - b);

  answer = sorted.slice(0, 5);

  return answer;
}

const printResult = solution([12, 4, 15, 46, 38, 1, 14]);
console.log(printResult);
