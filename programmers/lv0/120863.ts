// https://school.programmers.co.kr/learn/courses/30/lessons/120863

function solution(polynomial: string) {
  const key = " + ";

  const arr = polynomial.split(key);
  let x = 0;
  let y = 0;
  for (const a of arr) {
    if (a.endsWith("x")) {
      parseInt(a) ? (x += parseInt(a)) : x++;
    } else {
      parseInt(a) ? (y += parseInt(a)) : y++;
    }
  }

  let result = [];
  if (x > 1) {
    result.push(`${x}x`);
  } else if (x > 0) {
    result.push(`x`);
  } else {
    null;
  }

  y > 0 ? result.push(`${y}`) : null;

  return result.join(key);
}

console.log(solution("3x + 7 + x"));
console.log(solution("x + x + x"));
console.log(solution("x + 7 + 8"));
console.log(solution("1 + 1 + 1"));
console.log(solution("1"));
console.log(solution("x"));
