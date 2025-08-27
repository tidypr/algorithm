// https://school.programmers.co.kr/learn/courses/30/lessons/181886

function solution(names: string[]) {
  const arr5th = names.filter((name, index) => {
    if (index % 5 === 0) {
      return name;
    }
  });

  return arr5th;
}

const result = solution(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"]);

console.log(result);
