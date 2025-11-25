// https://school.programmers.co.kr/learn/courses/30/lessons/181932

function solution(code: string) {
  let mode = false;
  const ret = [];

  for (let i = 0; i < code.length; i++) {
    if (code[i] === "1") {
      mode = !mode;
      continue;
    }

    if (mode === false && i % 2 === 0) {
      ret.push(code[i]);
    }

    if (mode === true && i % 2 === 1) {
      ret.push(code[i]);
    }

    console.log(i, mode, code[i], ret);
  }

  if (ret.length === 0) "EMPTY";

  return ret.join("");
}

const result = solution("abc1abc1abc");
// const result = solution("abc1abc1abc1dd");

console.log(result);
