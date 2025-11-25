// https://school.programmers.co.kr/learn/courses/30/lessons/181908

function solution(my_string: string, is_suffix: string) {
  const isPostfix = my_string.endsWith(is_suffix);

  return isPostfix ? 1 : 0;
}

const result1 = solution("banana", "ana");
const result2 = solution("banana", "nan");
const result3 = solution("banana", "wxyz");
const result4 = solution("banana", "abanana");

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
