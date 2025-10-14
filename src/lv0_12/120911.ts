// https://school.programmers.co.kr/learn/courses/30/lessons/120911

function solution(my_string: string) {
  const tempArr = my_string.toLowerCase().split("");
  tempArr.sort((a, b) => a.localeCompare(b));
  return tempArr.join("");
}
