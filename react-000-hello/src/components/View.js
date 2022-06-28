import React from "react";
/*
tag 처럼 보이지만 component
사용자가 만든것들은 첫 글자를 대문자로써서 헷갈리지 않게
*/
/*
View.js 는 props 변수를 통해 title 변수를 받아서 props 에 담겨있는 title 변수를 
props.변수이름 과 같은 형태로 사용해 reRendering
*/
/*
부모 컴포넌트에서 전달해준 변수는
props 에 받아 {props.변수명} 형식으로 사용할 수 있다
props 를 통해서 전달받은 변수는 read only
(부모로 부터 받은 내용은 자식이 변경 불가)
*/
// props.title 스프레드(분해)해서 title 을 추출해 title 변수 선언 코드가 단순해짐
const View = (props) => {
  const { title } = props;
  return (
    <div>
      전달받은 값 : {props.title}, {title}
    </div>
  );
};

export default View;
