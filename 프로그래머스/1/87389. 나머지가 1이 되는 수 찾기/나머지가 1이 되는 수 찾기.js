function solution(n) {
    var answer = 0;
    
    const startNum = n;
    for(let n = startNum; n > 1;  n--){
        if(startNum % n === 1) {
            answer = n
        }
    }
    
    return answer;
}