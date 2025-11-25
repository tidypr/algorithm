// https://school.programmers.co.kr/learn/courses/30/lessons/120890

function solution(array: number[], n: number) {
  const subnum = array.map((x) => n - Math.abs(x));

  // 최소값
  const submin = Math.min(...subnum);
  // console.log(submin);

  // 최소값 인덱스
  const minarr = subnum
    .map((x, index) => (x === submin ? index : ""))
    .filter((x) => typeof x === "number");

  // 배열값
  const arrnum = minarr.map((x) => array[x]);

  return Math.min(...arrnum);
}

console.log(solution([10, 11, 12, -12, 11], 12));
