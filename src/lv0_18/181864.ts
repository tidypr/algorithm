// https://school.programmers.co.kr/learn/courses/30/lessons/181864

function solution(myString: string, pat: string) {
  const convertChar: string[] = [];

  for (const str of myString) {
    const Char = str === "A" ? "B" : "A";
    convertChar.push(Char);
  }
  const reStrring = convertChar.join("");
  const result = reStrring.includes(pat) ? 1 : 0;
  return result;
}

const result1 = solution("ABBAA", "AABB");
console.log(result1);
