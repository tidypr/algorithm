// https://school.programmers.co.kr/learn/courses/30/lessons/181902

const countStr: { [key: string]: number } = {};
const answer = [];

function solution(my_string: string) {
  // 대문자
  for (let i = 65; i < 91; i++) {
    countStr[String.fromCharCode(i)] = 0;
  }

  // 소문자
  for (let i = 97; i < 123; i++) {
    countStr[String.fromCharCode(i)] = 0;
  }

  for (const str of my_string) {
    countStr[str] ? (countStr[str] += 1) : (countStr[str] = 1);
  }

  return Object.values(countStr);
}

const result = solution("Programmers");
console.log(result);

console.log();
