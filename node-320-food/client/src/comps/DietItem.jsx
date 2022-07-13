import { useState, useContext } from "react";
import DietContext from "../context/DietContext";

const DietItem = ({ food }) => {
  /**
   * 식품명 표시된 곳을 click 했을때 input box 가 나타나도록 하는 코드
   * 1. DietList 에서 isEdit state 변수를 만들고 item 을 생성하면서
   * isEdit 변수의 상태에 따라 input box 또는 그냥 문자열이 나타나도록 설계한다
   * ==> 모든 item 이 isEdit 상태를 공유하게 되어 한개의 항목을 클릭하면
   *    모든 항목에 input 박스가 나타난다
   *
   * 2. DietItem 을 별도로 분리하고 DietItem 에서 isEdit 상태 변수를 생성한후
   * 같은 코드로 input box 가 나타나도록 수정
   * ==> 똑같은 이름의 isEdit 이지만 각 item 마다 서로 다른 isEdit 를 만들게 되어
   *    클릭한 item 만 input box 가 나타나도록 변경된다
   *
   */
  const [isEdit, setEdit] = useState(false);
  const { removeFoodItem } = useContext;

  const removeEvent = (e, d_id) => {
    /**
     * 표준 JS 함수중에 react 에서 사용 불가한 함수 존재
     * confirm 함수도 그중 하나로 browser 의 함수를 호출해 사용해야함
     * window.confirm()
     */

    if (window.confirm(d_id + "데이터를 삭제하시겠습니까")) {
      removeFoodItem(d_id);
    }
  }; // end removeEvent

  const onEdit = (e) => {
    setEdit(true);
  };

  const onKeyPress = (e) => {
    if (e.keyCode === 13) {
      setEdit(false);
    }
  };
  return (
    <tr key={food.d_id}>
      <td>{food.d_date}</td>
      {isEdit ? (
        <td>
          <input
            name="d_food"
            defaultValue={food.d_food}
            onKeyDown={onKeyPress}
          />
        </td>
      ) : (
        <td onClick={onEdit}>{food.d_food}</td>
      )}
      <td>{food.d_qty}</td>
      <td>{food.d_cal}</td>
      <td>{food.d_qty * food.d_cal}</td>
      <td
        style={{ cursor: "pointer" }}
        onClick={(e) => removeEvent(e, food.d_id)}
      >
        &times;
      </td>
    </tr>
  );
};
export default DietItem;
