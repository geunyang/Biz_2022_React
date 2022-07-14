/**
 * react 로부터 useState 변수를 추출
 * const useState = () =>{}
 * export {useState}
 */

// export default Input
import Input from "./Input";
import List from "./List";

const Main = () => {
  return (
    <>
      <Input />
      <List />
    </>
  );
};

export default Main;
