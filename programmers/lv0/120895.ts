// https://school.programmers.co.kr/learn/courses/30/lessons/120895

function solution(my_string: string, num1: number, num2: number) {
  const strArr = my_string.split("");
  const temp = strArr[num1];
  strArr[num1] = strArr[num2];
  strArr[num2] = temp;

  return strArr.join("");
}

console.log(solution("I love you", 3, 6));
