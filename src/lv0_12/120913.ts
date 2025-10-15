// https://school.programmers.co.kr/learn/courses/30/lessons/120913

// 1, 6
// 7, 12
// 13, 18

// 6 * 0, 6 * 1
// 6 * 1, 6 * 2
// 6 * 2, 6 * 3

// n * (i - 1), n * 1
// n * (i - 1), n * 2
// n * (i - 1), n * 3

function solution(my_str: string, n: number) {
  const len = Math.ceil(my_str.length / n);
  const sliceStr = [];

  for (let i = 1; i < len + 1; i++) {
    const strS = my_str.slice(n * (i - 1), n * i);
    sliceStr.push(strS);
  }

  return sliceStr;
}

console.log(solution("abc1Addfggg4556b", 6));
