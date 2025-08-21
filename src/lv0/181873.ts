// https://school.programmers.co.kr/learn/courses/30/lessons/181873

function solution(my_string: string, alp: string) {
  return my_string.replaceAll(alp, alp.toUpperCase());
}

const result1 = solution("programmers", "p");
console.log(result1);
const result2 = solution("lowercase", "x");
console.log(result2);
