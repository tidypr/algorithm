// https://school.programmers.co.kr/learn/courses/30/lessons/181890

function solution(str_list: string[]) {
  for (const str of str_list) {
    if (str === "l" || str === "r") {
      if (str === "l") {
        return str_list.slice(0, str_list.indexOf("l"));
      } else {
        return str_list.slice(str_list.indexOf("r") + 1, str_list.length);
      }
    }
  }
  return [];
}

const result1 = solution(["u", "r", "u", "l", "r"]);
const result2 = solution(["l"]);
const result3 = solution([]);
console.log(result1);
console.log(result2);
console.log(result3);
