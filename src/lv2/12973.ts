// https://school.programmers.co.kr/learn/courses/30/lessons/12973

function solution(s: string) {
  const sArr = s.split("");
  const temp = [sArr[0]];

  for (let i = 1; i < sArr.length; i++) {
    // 마지막 입력값: temp[temp.length - 1]
    if (temp[temp.length - 1] === sArr[i]) {
      temp.pop();
    } else {
      temp.push(sArr[i]);
    }
  }

  return temp.length > 0 ? 0 : 1;
}

console.log(solution("baabaa"));
console.log(solution("cdcd"));
