function solution(arr) {
    const min = arr.reduce((min, cur) => {
        if(min < cur) {
            return min
        }
        return cur
    })
    
    const answer = arr.filter((n) => n !== min)
    
    if(answer.length === 0){
        answer.push(-1)
    }
    
    return answer;
}