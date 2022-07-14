import AppContext from "../context/Context";
import { useContext } from "react";

// props 에서 address 분해
const View = () => {
  /**
   * App.js 에서 생성한 address state 를
   * Main.jsx 에 공급하고
   * Main.jsx 는 List.jsx 에 공급
   * List.jsx 는 다시 View.jsx 에 공급하는
   * 형태의 props Drilling 현상이
   *
   * AppContext.Provider 에서 제공 받음으로서
   * Main.jsx 와 List.jsx 의 관여 없이
   * 직접 address state 를 사용할 수 있게 된다
   *
   * useContext 는 React 16 버전부터 공식적으로 지원
   *
   */
  const { address } = useContext(AppContext);
  const { a_name, a_tel, a_address } = address;
  return (
    <div>
      <strong>이름 : </strong>
      <span>{a_name}</span>
      <strong>전화번호 : </strong>
      <span>{a_tel}</span>
      <strong>주소 : </strong>
      <span>{a_address}</span>
    </div>
  );
};
export default View;
