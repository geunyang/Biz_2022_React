import { createContext, useContext, useState } from "react";
const AppContext = createContext();
// 각각 props 가 필요한 Component 들이 useContext 를 사용하여 props 들을 분해하던 코드를 여기에서 함수로 선언하고 결과를 return
/**
 * hook 함수
 * Hook 함수는 모두가 use 접두사로 시작
 *
 * react 가 처음 탄생할때는 class 를 사용하여 Component 를 만들었다
 * JS class 를 사용하면 기존의 JS 코드의 장점을 활용하기 어렵다
 * JS class Java 클래스에 비하면 class 만드는데 복잡한 코드들이 필요하다
 * class 에 method 를 추가하거나 어떤 변수를 선언할때도 어려움이 있다
 *
 * react 에서는 class 로 Component 를 제작하는대신 함수를 사용하여 Component 를 제작하는 문법을 도입하였다
 *
 * 16 버전 이전에는 함수형 Component 에서 class Component 에 비해 Life Cycle 관리가 어려웠다
 * react 개발자(페이스북개발자) 들이 16.8 버전에서 Hook 함수를 발표
 * useState() : state 변수를 생성하는 함수
 * useEffect() : state 변수가 변동될때, React 사용자가 어떤 코드를 실행하고자 할때, 화면이 rendering될때 fetch 데이터를 가져올때
 *    1. 화면이 최초 rendering 될때 자동으로 호출되는 함수
 *    2. state 변수를 지정하여 state 변수가 변화될때
 * useContext() : ContextProvider 의 store 에 저장된 변수 함수를 가져오는 Hook 함수
 */

/** useContext 함수를 대신하는 사용자 정의 Hook 함수
 *
 * useContext 함수는 어떤 Provider 의 store에 저장된 데이터인지를 항상 명시해야한다
 * 함수를 사용할 때 반드시 무엇인가를 명시하는것은 코드 작성시 불편할 수 있다
 * 그래서 원래 있던 useContext 를 useAppContext 로 재정의해
 * 사용자가 어떤 Provider 를 사용해야 되는지 고민하지 않고 사용할 수 있도록 한다
 *
 * 사용자 정의 Hook 만드는 규칙
 * 접두사는 반드시 use 로 시작, 접미사는 원래 Hook 의 이름
 * useContext => useMyContext
 * useState => useMyState
 * useEffect => useMyEffect
 *
 * 이 함수는 원래의 hook 연산을 수행한 후 return 한다
 */
const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};
// Context.Provider 역할을 수행하는 Component
// props.children 속성을 매개변수로 받고 있다
// 이 Component 내에서 state 들을 선언
// App.js 에서 AppContext.Provider 로 Component 들을 묶고
// 여기에 value 를 지정한 코드를
// AppContextProvider 라는 객체함수로 선언하기
const AppContextProvider = ({ children }) => {
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
  return (
    <>
      <AppContext.Provider value={props}>{children}</AppContext.Provider>
    </>
  );
}; // AppContextProvider() end

export { useAppContext, AppContextProvider };
