// https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution(s: string) {
  const strArr = s.split(" ");
  console.time();
  const JadenCase = strArr.map(
    (x) => `${x[0].toUpperCase()}${x.slice(1).toLowerCase()}`
  );
  console.timeEnd();
  console.time();
  const concatStr = JadenCase.join(" ");
  console.timeEnd();
  return concatStr;
}

console.log(solution("3people unFollowed me"));
