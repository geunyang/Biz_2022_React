import Item from "./Item";
import View from "./View";
import AppContext from "../context/Context";
import { useContext } from "react";
/**
 * addrList 배열의 값을 표 형식으로 구현
 */
const List = () => {
  /**
   * 부모 container 로 부터 props 로 전달받던 addrList state 배열을
   * AppContext.Provider 의 store 에서 제공받기
   */
  const { addrList } = useContext(AppContext);
  const addrBody = addrList.map((addr) => {
    return <Item addr={addr} />;
  });
  return (
    <>
      <View />
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>전화번호</th>
            <th>주소</th>
          </tr>
        </thead>
        <tbody>{addrBody}</tbody>
      </table>
    </>
  );
};
export default List;
