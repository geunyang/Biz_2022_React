import { useState } from "react";
import moment from "moment";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
/*
Main 에 todoList 선언
store 기법
끌어올리기
input 과 view 가 공유
input이 입력받은 데이터를 스스로 add 할 수 없어 main 에게 되돌려 보내면
main 이 데이터를 받아 todoList 생성 후 공유

state 선언 위치 잘 확인할것 
 */

const TodoMain = () => {
  const [todoList, setTodoList] = useState([]);
  const insert_todo = (content) => {
    // TodoInput 이 전달해준 todo 를 todoList 에 추가하는곳
    const todo = {
      t_id: "",
      t_s_date: moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
      content: content,
      t_e_date: "",
    };
    // todoList 에 있는 배열을 모두 복사하고 끝에 todo 에 추가하여 todoBody 배열 생성
    const todoBody = [...todoList, todo];
    setTodoList(todoBody);
  };
  return (
    <div className="w3-container w3-margin">
      {/* TodoInput 에게 insert_todo 함수를 보내주기 */}
      <TodoInput insert_todo={insert_todo} />
      {/* TodoList 에게 todoList 데이터를 todoList 변수에 담아 보내기 */}
      <TodoList todoList={todoList} />
    </div>
  );
};
export default TodoMain;
