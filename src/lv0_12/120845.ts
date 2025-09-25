// https://school.programmers.co.kr/learn/courses/30/lessons/120845

function solution(box: number[], n: number) {
  const lenBox = box.map((x) => Math.floor(x / n));
  return lenBox.reduce((acc, cur) => acc * cur, 1);
}
