// https://school.programmers.co.kr/learn/courses/30/lessons/181885

function solution(todo_list: string[], finished: boolean[]) {
  const dotolist = todo_list.filter((todo, index) => {
    if (!finished[index]) {
      return todo;
    }
  });

  return dotolist;
}

const result = solution(["problemsolving", "practiceguitar", "swim", "studygraph"], [true, false, true, false]);
console.log(result);
