// props 없이 name 매개변수로 받아 즉시 분해하는 코드
const End2 = ({ name }) => {
  // inline style 을 변수로 지정하면 원하는 부분에만 적용가능 다수 협업시 유리
  /* 
  현재 comp 에서만 사용할 수 있도록 private style 을 지정하고
  tag comp 에 style keyword 를 사용하여 지정한다
  단 style 의 속성 이름은 kebab-case(font-style) 를 사용할 수 없고
  마이너스 기호를 제거하고 camel-case 로 사용해야한다
  속성 값들은 반드시 문자열로 만들어야한다
  */
  const h1Style = {
    color: "blue",
    fontStyle: "italic",
  };
  /*
   jsx 의 tag 규칙
   여러 tag 를 사용할 때는 반드시 가장 바깥쪽을 감싸는 group tag 가 있어야한다
   <div></div>
   <div></div>
   <div></div>
   <p></p> 사용불가
   
   <div>
        <div></div>
        <div></div>
        <div></div>
        <p></p>
   <div> 사용가능
   
   <>
        <div></div>
        <div></div>
        <div></div>
        <p></p>
   <> 빈태그 사용가능
   */
  return (
    <>
      <h1 style={h1Style}>내가 받은 name = {name}</h1>
    </>
  );
};

export default End2;
