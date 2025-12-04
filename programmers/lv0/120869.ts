// https://school.programmers.co.kr/learn/courses/30/lessons/120869

function solution(spell: string[], dic: string[]) {
  for (const d of dic) {
    const sp = spell.slice();
    const arr = d.split("");
    console.log(arr);

    for (const a of arr) {
      if (sp.indexOf(a) !== -1) {
        sp.splice(sp.indexOf(a), 1);
      }
    }

    if (sp.length === 0) {
      return 1;
    }
  }
  return 2;
}

console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"]));
console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]));
console.log(
  solution(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"])
);
