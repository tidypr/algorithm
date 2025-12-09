// https://school.programmers.co.kr/learn/courses/30/lessons/120921

function solution(A: string, B: string) {
  if (A === B) return 0;

  let arrA = A.split("");
  let cnt = 0;

  for (let i = 0; i < B.length - 1; i++) {
    const popStr = arrA.pop() as string;
    arrA = [popStr, ...arrA];
    cnt++;

    if (arrA.join("") === B) {
      return cnt;
    }
  }

  return -1;
}

console.log(solution("hello", "ohell"));
