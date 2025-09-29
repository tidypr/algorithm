// https://school.programmers.co.kr/learn/courses/30/lessons/120851

function solution(my_string: string) {
  const strArr = my_string.split("");
  const result = [];

  for (const str of strArr) {
    if (parseInt(str) > -1) {
      result.push(parseInt(str));
    }
  }

  return result.reduce((acc, cur) => acc + cur, 0);
}
