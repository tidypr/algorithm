// https://school.programmers.co.kr/learn/courses/30/lessons/181868

function solution(my_string: string) {
  const splitString = my_string.split(" ");

  const filterEmpty = splitString.filter((x) => x !== "");

  return filterEmpty;
}

const result1 = solution(" i    love  you");

console.log(result1);
