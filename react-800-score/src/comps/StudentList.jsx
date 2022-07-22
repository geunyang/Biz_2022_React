import { useScoreContext } from "../context/ScoreContextProvider";
import StudentItem from "./StudentItem";

const StudentList = () => {
  const { studentList } = useScoreContext();
  /**
   * each(map, forEach) 를 사용하여 반복문으로 ComponentList 를 만들때
   * 반드시 요소의 Key 변수에 값을 세팅해줘야한다
   * 같은 유형의 리스트들이 화면에 그려진 후에 일부 List 요소가 변경될때
   * react 가 그 변경된 요소를 추적 할 수 있는 UNIQUE 한 key 를 필요로 한다
   * 보통 DB 로부터 select 한 데이터에는 PK 요소가 포함되어 있다
   * 이 PK 요소를 key={PK} 형식으로 지정해주어야한다
   */
  const StudentBody = studentList.map((student) => {
    return <StudentItem student={student} key={student.st_num} />;
  });
  return (
    <table className="w3-table w3-table-all w3-hoverable">
      <thead>
        <tr>
          <th>학번</th>
          <th>이름</th>
          <th>학과</th>
          <th>연락처</th>
          <th>주소</th>
          <th>비고</th>
        </tr>
      </thead>
      <tbody>{StudentBody}</tbody>
    </table>
  );
};
export default StudentList;
