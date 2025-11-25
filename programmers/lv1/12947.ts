// https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(x: number) {
  const sum = `${x}`.split("").reduce((acc, cur) => +acc + +cur, 0);
  return `${x / sum}`.includes(".") ? false : true;
}
