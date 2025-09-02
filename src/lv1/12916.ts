// https://school.programmers.co.kr/learn/courses/30/lessons/12916

function solution(s: string) {
  const lenp = s
    .toLowerCase()
    .split("")
    .filter((x) => x === "p");
  const leny = s
    .toLowerCase()
    .split("")
    .filter((x) => x === "y");

  return lenp.length === leny.length ? true : false;
}
