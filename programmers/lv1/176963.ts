// https://school.programmers.co.kr/learn/courses/30/lessons/176963

function solution(name: string[], yearning: number[], photo: string[][]) {
  const result = [];
  for (const p of photo) {
    const temp: number[] = [];
    for (const n of name) {
      if (p.includes(n)) {
        temp.push(yearning[name.findIndex((x) => x === n)]);
      }
    }
    result.push(temp.reduce((a, b) => a + b, 0));
  }
  return result;
}

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
);
console.log(
  solution(
    ["kali", "mari", "don"],
    [11, 1, 55],
    [
      ["kali", "mari", "don"],
      ["pony", "tom", "teddy"],
      ["con", "mona", "don"],
    ]
  )
);
console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [["may"], ["kein", "deny", "may"], ["kon", "coni"]]
  )
);
