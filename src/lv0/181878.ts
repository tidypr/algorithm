// https://school.programmers.co.kr/learn/courses/30/lessons/181878

function solution(myString: string, pat: string) {
  const isStr = myString.toLowerCase().includes(pat.toLowerCase());
  return isStr ? 1 : 0;
}

const result1 = solution("AbCdEfG", "aBc");
console.log(result1);
const result2 = solution("aaAA", "aaaaa");
console.log(result2);
