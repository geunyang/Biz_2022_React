import { useState, useEffect } from "react";
import FoodList from "./FoodList";
import moment from "moment";

const FoodInput = () => {
  const [foodList, setFoodlist] = useState([]);

  const fetchFoodList = async () => {
    const response = await fetch("http://localhost:3000/food/list");
    const jsonFood = await response.json();
    setFoodlist(jsonFood);
  };

  useEffect(() => {
    fetchFoodList();
  }, []);

  const onClick = () => {
    const f_menu = document.querySelector("input[name='f_menu']");
    const f_value = document.querySelector("input[name='f_value']");
    const f_kcal = document.querySelector("input[name='f_kcal']");

    const food = {
      f_sdate: moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
      f_menu: f_menu.value,
      f_value: f_value.value,
      f_kcal: f_kcal.value,
      f_kcal_all: f_value.value * f_kcal.value,
    };

    // fetch 를 사용하여 POST 로 데이터를 서버로 보내기 위한 설정
    // 직렬화(Serialization) 공부할것
    const postData = {
      method: "POST",
      /*
        내가 지금부터 보내는 Content-Type이 application/json
        */

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    };
    fetch("http://localhost:3000/food", postData)
      .then((res) => res.text())
      .then((result) => {
        if (result === "OK") {
          fetchFoodList();
        }
      });
  };
  return (
    <>
      <input placeholder="메뉴" name="f_menu" className="w3-input" />
      <input placeholder="수량" name="f_value" className="w3-input" />
      <input placeholder="열량" name="f_kcal" className="w3-input" />
      <button type="button" onClick={onClick}>
        전송하기
      </button>

      <FoodList foodList={foodList} />
    </>
  );
};
export default FoodInput;
