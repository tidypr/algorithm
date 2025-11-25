// https://school.programmers.co.kr/learn/courses/30/lessons/181906

function solution(my_string: string, is_prefix: string) {
  const isPrefix = my_string.startsWith(is_prefix);

  return isPrefix ? 1 : 0;
}

const result1 = solution("banana", "ban");
const result2 = solution("banana", "nan");
const result3 = solution("banana", "abcd");
const result4 = solution("banana", "bananan");

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
