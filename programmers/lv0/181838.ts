// https://school.programmers.co.kr/learn/courses/30/lessons/181838

function solution(date1: number[], date2: number[]) {
  const date01 = new Date(date1.join("/"));
  const date02 = new Date(date2.join("/"));

  return date01 < date02 ? 1 : 0;
}
