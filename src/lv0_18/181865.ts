// https://school.programmers.co.kr/learn/courses/30/lessons/181865

function solution(binomial: string) {
  const [a, op, b] = binomial.split(" ");

  switch (op) {
    case "+":
      return +a + +b;
    case "-":
      return +a - +b;
    case "*":
      return +a * +b;
    case "/":
      return +a / +b;
  }
}

const result1 = solution("43 + 12");
console.log(result1);
