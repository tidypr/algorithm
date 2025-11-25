// https://school.programmers.co.kr/learn/courses/30/lessons/181875

function solution(strArr: string[]) {
  const newArr = strArr.map((str, i) => {
    return i % 2 === 0 ? str.toLowerCase() : str.toUpperCase();
  });
  return newArr;
}

const result = solution(["AAA", "BBB", "CCC", "DDD"]);
console.log(result);
