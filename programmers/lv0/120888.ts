// https://school.programmers.co.kr/learn/courses/30/lessons/120888

function solution(my_string: string) {
  const uniStr: string[] = [];

  for (const str of my_string) {
    uniStr.includes(str) ? "" : uniStr.push(str);
  }

  return uniStr.join("");
}

console.log(solution("We are the world"));
