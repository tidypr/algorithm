// https://school.programmers.co.kr/learn/courses/30/lessons/120907

const calCheck = (str: string) => {
  const strArr = str.split(" ");
  const result =
    strArr[1] === "+" ? +strArr[0] + +strArr[2] : +strArr[0] - +strArr[2];
  return result === +strArr[4] ? "O" : "X";
};

function solution(quiz: string[]) {
  const resultArr = quiz.map((x) => calCheck(x));
  return resultArr;
}

console.log(solution(["3 - 4 = -3", "5 + 6 = 11"]));
console.log(
  solution(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"])
);
