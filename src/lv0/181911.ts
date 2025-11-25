// https://school.programmers.co.kr/learn/courses/30/lessons/181911

function solution(my_strings: string[], parts: number[][]) {
  const answer = [];
  for (let i = 0; i < my_strings.length; i++) {
    console.log(my_strings[i].slice(parts[i][0], parts[i][1] + 1));
    answer.push(my_strings[i].slice(parts[i][0], parts[i][1] + 1));
  }

  return answer.join("");
}

const result = solution(
  ["progressive", "hamburger", "hammer", "ahocorasick"],
  [
    [0, 4],
    [1, 2],
    [3, 5],
    [7, 7],
  ]
);

console.log(result);
