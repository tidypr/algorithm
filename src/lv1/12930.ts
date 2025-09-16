// https://school.programmers.co.kr/learn/courses/30/lessons/12930

const switchCase = (str: string) => {
  const strArr = str.split("");
  const temp = [];

  for (let i = 0; i < strArr.length; i++) {
    if (i === 0 || i % 2 === 0) {
      temp.push(strArr[i].toUpperCase());
    } else {
      temp.push(strArr[i].toLowerCase());
    }
  }

  return temp.join("");
};

function solution(s: string) {
  const splitArr = s.split(" ");
  const result = [];

  for (let i = 0; i < splitArr.length; i++) {
    result.push(switchCase(splitArr[i]));
  }

  return result.join(" ");
}

console.log(solution("try hello world"));
