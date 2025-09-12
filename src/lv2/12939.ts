// https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s: string) {
  const strArr = s.split(" ");
  const numArr = strArr.sort((a, b) => +a - +b).map((x) => +x);

  return `${Math.min(...numArr)} ${Math.max(...numArr)}`;
}
