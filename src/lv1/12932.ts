// https://school.programmers.co.kr/learn/courses/30/lessons/12932

function solution(n: number) {
    const newarr = `${n}`.split('').map((x) => +x)
    newarr.reverse()

    return newarr
}
