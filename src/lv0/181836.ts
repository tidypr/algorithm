// https://school.programmers.co.kr/learn/courses/30/lessons/181836

function solution(picture: string[], k: number) {
  const result = [];

  for (let row = 0; row < picture.length; row++) {
    // ROW k번 반복
    for (let i = 0; i < k; i++) {
      // ROW 단어 k번 반복
      let tempCol = "";
      for (let col = 0; col < picture[row].length; col++) {
        tempCol = tempCol.concat(picture[row][col].repeat(k));
      }
      result.push(tempCol);
    }
  }

  return result;
}

console.log(solution(["x.x", ".x.", "x.x"], 3));
