// https://school.programmers.co.kr/learn/courses/30/lessons/81301

const obj: { [key: string]: string } = {
  zero: "0",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

function solution(s: string) {
  for (const key in obj) {
    s = s.replaceAll(key, obj[key]);
  }
  return +s;
}

console.log(solution("one4seveneight"));
console.log(solution("23four5six7"));
console.log(solution("2three45sixseven"));
console.log(solution("123"));
