function solution(s) {
    const arr = s.split(" ")
    
    let max = -9999;
    let min = 9999;
    
    for (num of arr){
        if(+num > max) {
            max = +num
        }
        if(+num < min){
            min = +num
        }
    }
    
    const result = `${min} ${max}`
    
    return result;
}