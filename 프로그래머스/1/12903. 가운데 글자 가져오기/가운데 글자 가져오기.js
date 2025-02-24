function solution(s) {
    const middle = Math.floor(s.length / 2) 
    let answer
    
    if(s.length % 2 === 1) {
        answer = s.substr(middle, 1)
    } else {
        answer = s.substr(middle - 1, 2)
    }
    
    return answer;
}