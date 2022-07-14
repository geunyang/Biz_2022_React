/**
 * react 로부터 useState 변수를 추출
 * const useState = () =>{}
 * export {useState}
 */
import { useState } from "react";
// export default Input
import Input from "./Input";
import List from "./List";
import View from "./View";

const Main = () => {
  // address state 변수가 생성되고
  // address state 변수를 변경시키는 setAddress 함수를 선언
  const [address, setAddress] = useState({
    a_name: "",
    a_tel: "",
    a_address: "",
  });
  const [addrList, setAddrList] = useState([]);
  return (
    <>
      <Input
        address={address}
        setAddress={setAddress}
        addrList={addrList}
        setAddrList={setAddrList}
      />
      <View address={address} />
      <List addrList={addrList} />
    </>
  );
};

export default Main;
