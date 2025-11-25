// https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution(s: string) {
  const arr = s.trim().split(" ");
  const result = [];

  for (const a of arr) {
    result.push(`${a[0].toUpperCase()}${a.slice(1).toLocaleLowerCase()}`);
  }
  return result.join(" ");
}

console.log(solution(" 3people unFollowed me"));
console.log(solution("for the last week"));
console.log(solution("for ?t last week"));
