// https://school.programmers.co.kr/learn/courses/30/lessons/120912

function solution(array: number[]) {
  let count = 0;
  const concat = array.join("");
  for (const str of concat) {
    str === "7" ? count++ : "";
  }
  return count;
}
