// https://school.programmers.co.kr/learn/courses/30/lessons/181837

function solution(order: string[]) {
  const americano = order.filter((x) => !x.includes("latte"));
  const latte = order.filter((x) => x.includes("latte"));
  const total = americano.length * 4500 + latte.length * 5000;
  return total;
}

console.log(
  solution(["cafelatte", "americanoice", "hotcafelatte", "anything"])
);
