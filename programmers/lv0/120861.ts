// https://school.programmers.co.kr/learn/courses/30/lessons/120861

function solution(keyinput: string[], board: number[]) {
  const xMax = (board[0] - 1) / 2;
  const yMax = (board[1] - 1) / 2;

  const start = [0, 0];

  for (const key of keyinput) {
    switch (key) {
      // Y축
      case "up":
        start[1] = Math.min(yMax, ++start[1]);
        break;
      case "down":
        start[1] = Math.max(-yMax, --start[1]);
        break;

      // X축
      case "right":
        start[0] = Math.min(xMax, ++start[0]);
        break;
      case "left":
        start[0] = Math.max(-xMax, --start[0]);
        break;
    }
  }

  return start;
}

console.log(solution(["left", "right", "up", "right", "right"], [11, 11]));
console.log(solution(["down", "down", "down", "down", "down"], [7, 9]));
