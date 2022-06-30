import "./App.css";
import Main from "./comps/Main.jsx";
/*
react 에서 JS 파일, JSX(javaScript Extands)
*/
// jsx 에서 사용하는 component type 변수
const h1 = <h1>대한민국만세</h1>;
const div = <div>{h1}</div>;
const header = <header className="App-header"></header>;
const appDiv = (
  <div className="App">
    {header}
    {div}
    <Main />
  </div>
);
// app 이라는 이름의 component type 의 함수 선언
function App() {
  return appDiv;
}

// 다른 component 에서 app component 를 import 하여 조립할 수 있도록 내보내는것
export default App;
