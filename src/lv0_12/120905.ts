// https://school.programmers.co.kr/learn/courses/30/lessons/120905

function solution(n: number, numlist: number[]) {
  return numlist.filter((x) => x % n === 0);
}
