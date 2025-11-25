// https://school.programmers.co.kr/learn/courses/30/lessons/181904

// [
//   [ 1,  2,  3,  4],
//   [ 5,  6,  7,  8],
//   [ 9, 10, 11, 12],
//   [13, 14, 15, 16],
//   [17, 18, 19, 20],
//   [21],
// ]

function solution(my_string: string, m: number, c: number) {
  const array2D: string[][] = [];
  let maxRow = Math.ceil(my_string.length / m);
  let skipStr = 0;

  for (let i = 0; i < maxRow; i++) {
    array2D.push([]);
    for (let j = 0; j < m; j++) {
      array2D[i][j] = my_string[i + j + skipStr];
    }
    skipStr += m - 1;
  }

  return array2D.map((x) => x.at(c - 1)).join("");
}

const result1 = solution("ihrhbakrfpndopljhygc1", 4, 2);
console.log(result1);
const result2 = solution("programmers", 1, 1);
console.log(result2);
