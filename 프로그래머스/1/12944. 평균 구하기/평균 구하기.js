function solution(arr) {
    var answer = 0;
    
    answer = arr.reduce((a,b) => a + b, 0)
    
    return answer / arr.length;
}