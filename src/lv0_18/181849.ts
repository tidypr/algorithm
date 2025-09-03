// https://school.programmers.co.kr/learn/courses/30/lessons/181849

function solution(num_str: string) {
  return +num_str
    .split("")
    .map((x) => +x)
    .reduce((acc, cur) => acc + cur, 0);
}
