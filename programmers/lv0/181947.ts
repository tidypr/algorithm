// https://school.programmers.co.kr/learn/courses/30/lessons/181947

const fs = require("fs");
const [a, b] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map((x: string) => +x);
console.log(`${a} + ${b} = ${a + b}`);
