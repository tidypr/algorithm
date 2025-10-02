// https://school.programmers.co.kr/learn/courses/30/lessons/134240

function solution(food: number[]) {
  const newFood = food.slice(1).map((x) => Math.floor(x / 2));

  let foodlist = [];

  for (const [idx, food] of newFood.entries()) {
    for (let i = 0; i < food; i++) {
      foodlist.push(idx + 1);
    }
  }

  const refoodlist = [...foodlist];
  refoodlist.reverse();

  return `${foodlist.join("")}0${refoodlist.join("")}`;
}

console.log(solution([1, 7, 1, 2]));
