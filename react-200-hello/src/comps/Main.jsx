import Sub from "./Sub";
/*
 *app.js > main.js > sub.jsx > end.jsx
 *sub 가 그 값을 props 에 담아서 출력
 */
const Main = () => {
  const comp = (
    <div>
      <h1>반갑습니다</h1>
      <p>리액트를 사용하여 컴포넌트 만드는 중</p>
      <p> 3 + 4 = {3 + 4}</p>
      <Sub name="데인드한" />
    </div>
  );
  return comp;
};
export default Main;
