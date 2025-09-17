// https://school.programmers.co.kr/learn/courses/30/lessons/120823

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input: string[] = [];

rl.on("line", function (line: string) {
  input = line.split(" ");
}).on("close", function () {
  for (let i = 1; i <= Number(input[0]); i++) {
    console.log("*".repeat(i));
  }
});
