// https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution(s: string) {
  const obj: { [key: string]: number } = {};
  let idx = 0;
  const arr = s.split("");
  const result = [];

  for (const a of arr) {
    if (!Object.hasOwn(obj, a)) {
      obj[a] = idx;
      result.push(-1);
    } else {
      result.push(idx - obj[a]);
      obj[a] = idx;
    }
    idx++;
  }

  return result;
}

// console.log(solution("banana"));
// console.log(solution("foobar"));
// console.log(solution("bananaa"));

console.log(solution("aaaaaaaaaa"));
// console.log(solution("abcdefg"));
