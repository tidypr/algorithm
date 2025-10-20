// https://school.programmers.co.kr/learn/courses/30/lessons/181910

function solution(my_string: string, n: number) {
  const sliceStr = my_string.slice(-n);
  return sliceStr;
}

const result1 = solution("ProgrammerS123", 11);
console.log(result1);
const result2 = solution("He110W0r1d", 5);
console.log(result2);
