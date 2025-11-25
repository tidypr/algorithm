// https://school.programmers.co.kr/learn/courses/30/lessons/159994

function solution(cards1: string[], cards2: string[], goal: string[]) {
  for (const g of goal) {
    if (cards1[0] === g) {
      cards1.shift();
    } else if (cards2[0] === g) {
      cards2.shift();
    } else {
      return "No";
    }

  }
  return "Yes";
}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);
