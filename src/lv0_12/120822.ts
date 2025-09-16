// https://school.programmers.co.kr/learn/courses/30/lessons/120822

function solution(my_string: string) {
  const strArr = my_string.split("");
  strArr.reverse();
  return strArr.join("");
}
