import { useState } from "react";
import View from "./View";

/*
react component 선언
title 변수를 상태 변수로 사용하겠다고 선언
상태 변수로 선언되는 순간 react 가 화면에 표시되는 부분을 모두 감시
title 값을 입력되는 값으로 변경
키보드로 입력하는 순간 onChange 를 통해
title 이 표출되는 모든 부분이 변화
*/
const Write = () => {
  /*
    react 의 state 변수(엄청중요함)
    state 변수는 처음 저장된 값이 변경되면 그 데이터가 표출되는 화면을 자동으로 reRendering 한다
    state 변수는 userState() 함수를 사용하여 선언한다
    [변수이름, 변수의setter]
    setter 에 의해 변수가 변화가 되면 
    변수값이 표출되는 부분의 화면이 갱신된다
    */
  //useState 이용해서 title 만들고 setTitle 로 value??????
  const [title, setTitle] = useState("Korea");
  /*
  react 에서는 state 로 설정된 변수는 직접 값을 변경 할 수 없다
  title = "뿌엥" 과 같은 코드 급지
  state 로 설정된 변수는 반드시 같이 동반 선언된 
  setter 함수를 통해서 변화시켜야한다
  getter 는 바로 사용가능
  */
  /*
    매개변수 타입 지정하지 않음
    */
  const onChange = (e) => {
    setTitle(e.target.value);
  };
  /*
  Write 가 title 이라는 이름의 변수를 View.js 에 보내고
  */
  return (
    <form>
      <input name="title" value={title} onChange={onChange} />
      <div>{title}</div>
      <View title={title} />
    </form>
  );
};

export default Write;
