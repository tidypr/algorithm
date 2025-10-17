// https://school.programmers.co.kr/learn/courses/30/lessons/181907

function solution(my_string: string, n: number) {
  return my_string.slice(0, n);
}

const result1 = solution("ProgrammerS123", 11);
console.log(result1);
const result2 = solution("He110W0r1d", 5);
console.log(result2);
