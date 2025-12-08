// https://school.programmers.co.kr/learn/courses/30/lessons/181944

const fs = require("fs");
const num = +fs.readFileSync(0).toString().trim();
console.log(`${num} is ${num % 2 === 0 ? "even" : "odd"}`);
