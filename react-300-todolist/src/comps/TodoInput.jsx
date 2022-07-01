function TodoInput(props) {
  const { insert_todo } = props;
  /*
  input box 에 키보드로 문자열을.. 주석 놓침
  */
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      // insert_todo 호출하며 입력된 todo를 전송한다
      const todo = e.target.value;
      insert_todo(todo);
    }
  };
  return (
    <>
      {/* 
        input box onKeyDown 핸들러 등록
        키보드 입력을 감시하기
        */}
      <input
        placeholder="TODO INPUT"
        className="w3-input w3-border w3-hover-light-gray"
        onKeyDown={onKeyDown}
      />
    </>
  );
}
export default TodoInput;
