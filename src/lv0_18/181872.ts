// https://school.programmers.co.kr/learn/courses/30/lessons/181872

function solution(myString: string, pat: string) {
  const findIndex = myString.lastIndexOf(pat);
  const endIndex = findIndex + pat.length;
  return myString.slice(0, endIndex)
}

const result1 = solution("AbCdEFG", "dE");
console.log(result1);
const result2 = solution("AAAAaaaa", "a");
console.log(result2);
