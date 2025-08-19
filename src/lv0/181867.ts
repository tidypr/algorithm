// https://school.programmers.co.kr/learn/courses/30/lessons/181867

function solution(myString: string) {
  const splitString = myString.split("x");
  return splitString.map((item) => item.length);
}

const result = solution("xabcxdefxghi");
console.log(result);
