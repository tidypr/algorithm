// https://school.programmers.co.kr/learn/courses/30/lessons/181866

function solution(myString: string) {
  const splieString = myString.split("x").filter((x) => x !== "");
  const sortedString = splieString.sort((a: string, b: string) => a.localeCompare(b));
  return sortedString;
}

const result1 = solution("dxccxbbbxaaaa");
console.log(result1);
