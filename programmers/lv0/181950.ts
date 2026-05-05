// https://school.programmers.co.kr/learn/courses/30/lessons/181950

// import fs from 'fs';
const fs = require("fs");
const [input, num] = fs.readFileSync(0).toString().trim().split(" ");
console.log(`${input}`.repeat(+num));
