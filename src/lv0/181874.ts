// https://school.programmers.co.kr/learn/courses/30/lessons/181874

function solution(myString: string) {
  const lower = myString.toLowerCase();

  return lower.replaceAll("a", "A");
}

const result = solution("abstract algebra");
console.log(result);
