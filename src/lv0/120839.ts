// https://school.programmers.co.kr/learn/courses/30/lessons/120839

// 2 < 0
// 0 < 5
// 5 < 2
function solution(rsp: string) {
  const rspArr = rsp.split("");
  const winArr = rspArr.map((x) => (x === "2" ? "0" : x === "0" ? "5" : "2"));
  return winArr.join("");
}

solution("205");
