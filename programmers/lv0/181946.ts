// https://school.programmers.co.kr/learn/courses/30/lessons/181946

const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()
console.log(input.replaceAll(' ', ''))