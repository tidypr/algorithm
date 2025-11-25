// https://school.programmers.co.kr/learn/courses/30/lessons/181943

function solution(my_string: string, overwrite_string: string, s: number) {
  const replaceStr = my_string.slice(s, s + overwrite_string.length);
  const prevString = my_string.split("");
  const nextString = overwrite_string.split("");
  for (let i = s; i < s + overwrite_string.length; i++) {
    prevString[i] = nextString[i - s];
  }
  return prevString.join("");
}

console.log(solution("He11oWor1d", "lloWorl", 2)); // "HelloWorld"
console.log(solution("Program29b8UYP", "merS123", 7)); // "Programmers"
