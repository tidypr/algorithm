// https://school.programmers.co.kr/learn/courses/30/lessons/181942

function solution(str1: string, str2: string) {
  const answer = [];
  for (let i = 0; i < str1.length; i++) {
    answer.push(str1.slice(i, 1 + i));
    answer.push(str2.slice(i, 1 + i));
  }
  return answer.join("");
}

console.log(solution("aaaaa", "bbbbb"));
