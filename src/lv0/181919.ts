// https://school.programmers.co.kr/learn/courses/30/lessons/181919

function solution(n: number) {
  let num = n;
  const answer: number[] = [];

  while (num !== 1) {
    answer.push(num);
    num = num % 2 === 0 ? num / 2 : 3 * num + 1;
  }

  answer.push(1);

  return answer;
}

const result = solution(10);
console.log(result);
