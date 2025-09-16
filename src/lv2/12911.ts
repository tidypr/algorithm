// https://school.programmers.co.kr/learn/courses/30/lessons/12911

// 이진수 변환
const convertBinary = (n: number) => {
  const temp = [];

  while (n !== 0) {
    temp.unshift(n % 2);
    n = Math.floor(n / 2);
  }

  const filterOne = temp.filter((x) => x === 1);

  return filterOne.length;
};

function solution(n: number) {
  let isNext = true;
  let oneLen = convertBinary(n);

  while (isNext) {
    const nextNum = ++n;
    let nextLen = convertBinary(nextNum);

    if (nextLen === oneLen) {
      isNext = false;
      return nextNum;
    }
  }
}

console.log(solution(78));
