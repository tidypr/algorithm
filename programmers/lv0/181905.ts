// https://school.programmers.co.kr/learn/courses/30/lessons/181905

function solution(my_string: string, s: number, e: number) {
  const sliceStr = my_string.slice(s, e + 1);
  console.log(sliceStr);
  const reverseStr = sliceStr.split("").reverse().join("");

  return my_string
    .slice(0, s)
    .concat(reverseStr)
    .concat(my_string.slice(e + 1));
}

const result1 = solution("Progra21Sremm3", 6, 12);
console.log(result1);
const result2 = solution("Stanley1yelnatS", 4, 10);
console.log(result2);
