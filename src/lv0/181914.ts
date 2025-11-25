// https://school.programmers.co.kr/learn/courses/30/lessons/181914

function solution(number: string) {
  const sum = number.split("").reduce((acc, cur) => +acc + +cur, 0);

  return sum % 9;
}

const result1 = solution("123");
console.log(result1);
const result2 = solution("78720646226947352489");
console.log(result2);
