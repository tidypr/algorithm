// https://school.programmers.co.kr/learn/courses/30/lessons/181834

function solution(myString: string) {
  const arrStr = myString.split("");
  const newStr = arrStr.map((x) =>
    x.charCodeAt(0) < "l".charCodeAt(0) ? "l" : x
  );
  return newStr.join("");
}

console.log(solution("abcdevwxyz"));
