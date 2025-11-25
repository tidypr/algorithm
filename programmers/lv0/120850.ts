// https://school.programmers.co.kr/learn/courses/30/lessons/120850

function solution(my_string: string) {
  const strArr = my_string.split("");
  const result = [];

  for (const str of strArr) {
    if (parseInt(str) > -1) {
      result.push(parseInt(str));
    }
  }

  result.sort((a, b) => a - b);

  return result;
}


