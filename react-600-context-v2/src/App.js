import logo from "./mrok.png";
import "./App.css";
import Main from "./comps/Main";
import AppContext from "./context/Context";
import { useState } from "react";

function App() {
  // address state 변수가 생성되고
  // address state 변수를 변경시키는 setAddress 함수를 선언
  const [address, setAddress] = useState({
    a_name: "",
    a_tel: "",
    a_address: "",
  });
  const [addrList, setAddrList] = useState([]);

  const [isEdit, setEdit] = useState(false);
  // store 에 보관하기 용이한 bundling
  // 개별적인 요소보다 관리가 쉬운 bundling 형태로 보내는 것이 좋다
  const props = {
    address,
    setAddress,
    addrList,
    setAddrList,
    isEdit,
    setEdit,
  };

  /**
   * 프로젝트에서 사용할 state 변수와 setState 함수를 모두 App.js(가장 상위) Component 로 이동하고
   * Main Component 를 AppContext.Provider 로 감싸고
   * AppContext.Provider 에 value 변수로 state 변수와 setState 함수를 전달
   *
   * 이제 모든 변수와 함수는 AppContext.Provider 의 store 에 보관된다
   */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="로고" />
      </header>
      <AppContext.Provider value={props}>
        <Main />
      </AppContext.Provider>
    </div>
  );
}

export default App;
