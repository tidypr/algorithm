// https://school.programmers.co.kr/learn/courses/30/lessons/42586

const shiftFn = (arr: number[]) => {
  let cnt = 0;
  while (arr[cnt] >= 100) {
    cnt++;
  }
  return cnt;
};

function solution(progresses: number[], speeds: number[]) {
  const result = [];

  while (progresses.some((x) => x < 100)) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }
    const cnt = shiftFn(progresses);
    cnt > 0 ? result.push(cnt) : null;
    progresses = progresses.slice(cnt);
    speeds = speeds.slice(cnt);
  }
  return result;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
console.log(solution([10, 20, 30], [1, 2, 10]));
console.log(solution([10, 10, 10, 10], [1, 1, 1, 1]));
