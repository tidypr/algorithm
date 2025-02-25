function solution(a, b) {
    var answer = 0;
    if(a === b) a
    
    const startNum = Math.min(a,b)
    const endNum = Math.max(a,b)
    for(let i = startNum; i <= endNum; i++) {
        answer += i;
    }
    
    
    return answer;
}