// https://school.programmers.co.kr/learn/courses/30/lessons/120849

function solution(my_string: string) {
  const splitStr = my_string.split("");
  const filterStr = splitStr.filter((x) =>
    ["a", "e", "i", "o", "u"].indexOf(x) !== -1 ? "" : x
  );
  return filterStr.join("");
}

console.log(solution("nice to meet you"));
