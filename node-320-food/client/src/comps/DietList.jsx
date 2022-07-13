import { useContext } from "react";
import DietContext from "../context/DietContext";
import DietItem from "./DietItem";
/**
 * 주석한줄빼먹음~~
 * props 에서 직접 분해하며(비구조화, spread)
 * 직접 foods 변수에 받기
 */
const DietList = () => {
  // const { foods } = params;

  // DietContext 에서 foods 를 꺼내 담아주세요
  const { foods } = useContext(DietContext);
  /**
   * map 을 사용하여 foods 배열의 데이터를
   * tr, td 를 갖는 list body 요소로 생성하기
   */
  // isEdit값이 true 면 food 값
  // 이부분 코드 풀이 다시 듣기 onClick/onEdit
  const foodsBody = foods.map((food) => {
    return <DietItem food={food} />;
  });

  return (
    <table className="w3-table w3-table-all">
      <thead>
        <tr>
          <th>날짜</th>
          <th>식품명</th>
          <th>섭취량</th>
          <th>단위 칼로리</th>
          <th>총 칼로리</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>{foodsBody}</tbody>
    </table>
  );
};
export default DietList;
