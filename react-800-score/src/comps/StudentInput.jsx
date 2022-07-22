import { useScoreContext } from "../context/ScoreContextProvider";

const StudentInput = () => {
  const { student, setStudent, insertStudent, stNumCheck } = useScoreContext();

  const onChangeEvent = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };
  // 왜 사용하는지 모르겠음
  /**
   * 입력된 문자열이 다섯개 이상이면 pathvarriable보내서 검사해라
   */
  const onChangeStNum = (e) => {
    const value = e.target.value;
    if (value.length >= 5) {
      stNumCheck(value);
    }
    setStudent({ ...student, st_num: value.toUpperCase() });
  };
  return (
    <div className="w3-container w3-row">
      <input
        name="st_num"
        value={student.st_num}
        className="w3-col l2 w3-margin"
        placeholder="학번"
        onChange={onChangeStNum}
      />
      <input
        name="st_name"
        value={student.st_name}
        className="w3-col l2 w3-margin"
        placeholder="이름"
        onChange={onChangeEvent}
      />
      <input
        name="st_dept"
        value={student.st_dept}
        className="w3-col l2 w3-margin"
        placeholder="학과"
        onChange={onChangeEvent}
      />
      <input
        name="st_tel"
        value={student.st_tel}
        className="w3-col l2 w3-margin"
        placeholder="연락처"
        onChange={onChangeEvent}
      />
      <input
        name="st_addr"
        value={student.st_addr}
        className="w3-col l2 w3-margin"
        placeholder="주소"
        onChange={onChangeEvent}
      />
      <button
        onClick={insertStudent}
        className="w3-button w3-blue-gray w3-col l12"
      >
        저장
      </button>
    </div>
  );
};
export default StudentInput;
