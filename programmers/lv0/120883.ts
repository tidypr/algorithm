// https://school.programmers.co.kr/learn/courses/30/lessons/120883

function solution(id_pw: string[], db: string[][]) {
  for (const d of db) {
    if (d[0] === id_pw[0]) {
      if (d[1] === id_pw[1]) {
        return 'login'
      }
      return 'wrong pw'
    }
  }
  return "fail";
}

console.log(
  solution(
    ["meosseugi", "1234"],
    [
      ["rardss", "123"],
      ["yyoom", "1234"],
      ["meosseugi", "1234"],
    ]
  )
);
