// https://school.programmers.co.kr/learn/courses/30/lessons/120834

function solution(age: number) {
  const strArr = age.toString().split("");
  const alpArr = strArr.map((x) => String.fromCharCode(+x + 97));
  return alpArr.join("");
}
