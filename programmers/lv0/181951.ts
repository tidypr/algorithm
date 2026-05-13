// https://school.programmers.co.kr/learn/courses/30/lessons/181951

const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ");
console.log(`a = ${a}`);
console.log(`b = ${b}`);
