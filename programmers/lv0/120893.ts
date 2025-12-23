// https://school.programmers.co.kr/learn/courses/30/lessons/120893

function solution(my_string: string) {
  const convertStr = [];
  for (const str of my_string) {
    if (str.charCodeAt(0) >= 97) {
      convertStr.push(String.fromCharCode(str.charCodeAt(0) - 32));
    } else {
      convertStr.push(String.fromCharCode(str.charCodeAt(0) + 32));
    }
  }

  return convertStr.join("");
}
