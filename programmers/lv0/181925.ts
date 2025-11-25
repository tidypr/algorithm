// https://school.programmers.co.kr/learn/courses/30/lessons/181925

function solution(numLog: number[]) {
  const answer: string[] = [];

  for (let i = 0; i < numLog.length - 1; i++) {
    const diff = numLog[i + 1] - numLog[i];

    switch (diff) {
      case 1:
        answer.push("w");
        break;
      case -1:
        answer.push("s");
        break;
      case 10:
        answer.push("d");
        break;
      case -10:
        answer.push("a");
        break;
    }
  }

  return answer.join("");
}

const result = solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]);
console.log(result);
