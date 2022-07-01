import { Link } from "react-router-dom";
// a tag 반영돼? 어디가?
const Navi = () => {
  return (
    <nav className="main-nav">
      <Link to="/">Home</Link>
      <Link to="/todo">지금 해야 할 일</Link>
      <Link to="/bucket">나의 버킷 리스트</Link>
      <input></input>
    </nav>
  );
};
// 왜 return 아니야? 무슨뜻?
export default Navi;
