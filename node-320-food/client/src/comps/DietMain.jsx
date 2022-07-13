/**
 * useState 는 state 변수를 선언할 때 사용할 함수
 *
 * useEffect 는 React 의 생명주기 함수로
 * Component 가 rendering 될때 자동으로 코드를 실행하여
 * node 서버로 부터 데이터를 fetch(SELECT ALL) 하여
 * state 변수에 담는 코드가 작성될 곳
 */
import { useState, useEffect, useContext } from "react";
import DietInput from "./DietInput";
import DietList from "./DietList";
import DietContext from "../context/DietContext";

/**
 *
 * DB 에서 데이터들을 fetch 하여 List 를 보여줄 예정인데
 * List 를 보여준 다음에 item 을 클릭하거나 변경하는 코드를 추가하려면
 * state 데이터를 만들 위치가 중요하다
 *
 * DietMain 에서 DB fetch 하고 item 등을 변화시키는 event 도 선언하여
 * Main Component 가 감싸고 있는 child Component 들이 공유 할 수 있도록 설계한다
 *
 */
const DietMain = () => {
  // useState 와 useEffect 는 함수 내부에서 실행될 코드
  const [foods, setFoods] = useState([]);

  // 데이터를 fetch 할 때 사용할 함수 선언하기
  // 순서 때문에 async await  사용
  const fetchFood = async () => {
    const res = await fetch("/food/selectAll");
    if (res.ok) {
      return await res.json();
    }
  };

  // DietMain 컴포넌트가 rendering 될때 실행하여
  // fetchFood() 함수룰 호출하고
  // 결과를 food state 변수에 세팅하기

  /**
   * useEffect 의 두번째 매개변수
   *  두번째 매개변수에 state 변수를 설정하면
   * state 변수값이 변화 될 때마다 useEffect 함수가 실행
   * state 변수의 변화를 감지하여 어떤 event 를 실행할 때 사용
   *
   * 두번째 매개변수에 빈(blank) 배열 ( [] ) 을 설정하면
   * 컴포넌트가 rendering 될 때 한번만 실행된다
   * 두번째 매개변수 생략시 useEffect 함수가 무한 반복된다
   *
   *
   */
  useEffect(() => {
    // async 방식의 함수를 return 할때 .then(비동기콜백방식) 을 반드시 사용해 함수 데이터를 돌려 받아야한다
    // fetchFood() 함수가 async 방식으로 선언 되었기 때문에 return 한 데이터는 .then(result) 함수를 사용하여 값을 받을 수 있다
    // async 함수가 return 한 값을 비동기 callback 방식으로 처리하기
    fetchFood().then((result) => {
      console.table(result);
      setFoods(result);
    });
  }, []);
  /**
   * 배열.filter() 함수를 사용하여
   * 전달받은 삭제할 d_id 와 일치하지 않는 데이터만 추출하기
   *
   */
  const removeFoodItem = (d_id) => {
    // 자바스크립트라서 변수명 앞에 $붙음
    fetch(`/food/remove/${d_id}`, { method: "DELETE" })
      .then((res) => res.text())
      .then((result) => {
        const filterBody = foods.filter((food) => food.d_id !== d_id);
        setFoods(filterBody);
      });
  };
  /**
   * child component 에 전달해야할 데이터와 함수가 많아지는 경우
   * 개별적으로 전달하는 것보다 하나의 객체로 묶어서 전달
   */

  const params = {
    foods,
    removeFoodItem,
    fetchFood,
    setFoods,
  };

  // DietList 와 DietInput 에게 params 에 담긴 데이터와 함수를 한꺼번에 전달하기
  return (
    <>
      {/* 
      DietContext.jsx 파일에 Context 를 생성하고
      Context 의 Provider 에게 params 에 담긴 변수와 함수들을 저장(Store) 
      각각 개별 Component 에 전달했던 params 를 제거
      */}
      <DietContext.Provider value={params}>
        <DietList />
        <DietInput params={params} />
      </DietContext.Provider>
    </>
  );
  // return (
  //   <>
  //     <DietList foods={foods} removeFoodItem={removeFoodItem} />
  //     <DietInput fetchFood={fetchFood} setFoods={setFoods} />
  //   </>
  // );
};
// 다른 컴포넌트에서 import 하기 위하여
// 함수를 export 해주기
export default DietMain;
