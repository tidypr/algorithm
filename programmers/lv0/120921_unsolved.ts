// https://school.programmers.co.kr/learn/courses/30/lessons/120921

function solution(A: string, B: string) {
  if (A === B) return 0;

  let strArr: string[] = A.split("");
  let count = 0;

  for (let i = 0; i < A.length; i++) {
    // const pop = A.substring(A.length - 1, A.length);
    const pop = [strArr.pop()];
    strArr = [...(pop as string[]), ...strArr];

    count++;

    if (strArr.join("") === B && count < B.length) {
      return count;
    } else {
      return strArr.join("") === B ? 1 : -1;
    }
  }
}

console.log(solution("hello", "lohel"));
