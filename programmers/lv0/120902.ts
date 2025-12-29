// https://school.programmers.co.kr/learn/courses/30/lessons/120902

function solution(my_string: string) {
  let result = 0;
  const strArr = ["+", ...my_string.split(" ")];
  for (let i = 0; i < strArr.length; i += 2) {
    if (strArr[i] === "+") {
      result += +strArr[i + 1];
    } else {
      result -= +strArr[i + 1];
    }
  }

  return result;
}

console.log(solution("3 + 4 - 5"));
