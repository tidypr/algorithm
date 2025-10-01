// https://school.programmers.co.kr/learn/courses/30/lessons/120904

function solution(num: number, k: number) {
  const numArr = num.toString().split("");
  return numArr.includes(`${k}`) ? numArr.indexOf(`${k}`) + 1 : -1;
}
