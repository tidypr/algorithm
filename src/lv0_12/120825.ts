// https://school.programmers.co.kr/learn/courses/30/lessons/120825

function solution(my_string: string, n: number) {
  const strarr = my_string.split("");
  const str3 = strarr.map((x) => x.repeat(n));
  return str3.join("");
}
