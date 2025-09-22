// https://school.programmers.co.kr/learn/courses/30/lessons/120837

function solution(hp: number) {
  let result = 0;
  let rest = hp;

  const calcNum = (num1: number, num2: number) => {
    result += Math.floor(num1 / num2);
    rest = num1 % num2;
  };

  calcNum(rest, 5);
  calcNum(rest, 3);
  calcNum(rest, 1);

  return result;
}

console.log(solution(24));
