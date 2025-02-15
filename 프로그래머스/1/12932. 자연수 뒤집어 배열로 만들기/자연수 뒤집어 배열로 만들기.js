function solution(n) {
    var answer = [];
    
    const result = n.toString().split('').reverse()
    for(i of result){
        answer.push(+i)
    }
    return answer;
}