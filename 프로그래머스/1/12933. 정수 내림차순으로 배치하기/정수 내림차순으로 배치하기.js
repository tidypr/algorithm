function solution(n) {
    var answer = 0;
    
    
    result = n.toString().split('').sort((a,b) => b-a).join('')
    
    answer = +result
    
    return answer;
}