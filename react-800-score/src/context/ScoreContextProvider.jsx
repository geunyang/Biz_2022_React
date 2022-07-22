import { useContext, createContext, useState, useEffect } from "react";

// ScoreContext 라는 store 생성
const ScoreContext = createContext();

// store 에서 state 변수와 함수를 가져가기 쉽도록 도와줄 함수를 선언
const useScoreContext = () => {
  return useContext(ScoreContext);
};

// state 변수와 함수를 공유하기 위한 Store
const ScoreContextProvider = ({ children }) => {
  // StudentInput 에서 input 에 text 를 입력하면
  // 입력된 text 저장할 state 변수
  const [student, setStudent] = useState({
    st_num: "",
    st_name: "",
    st_dept: "",
    st_tel: "",
    st_addr: "",
  });
  // api 서버에서 학생 리스트 가져와서 저장할 state 배열
  const [studentList, setStudentList] = useState([]);

  const [stdIsUpdate, setStdUpdate] = useState(false);

  // 데이터 가져오면 response 에 담기고 실제 데이터만 추출해서 stdList에 담고 그것을 StudentList에 세팅
  const fetchStudent = async () => {
    const response = await fetch("/api/student");
    const stdList = await response.json();
    setStudentList(stdList);
  };
  //text 를 추출하는 이유 ok 나 fail 만 보내기 때문에
  const deleteStudent = async (st_num) => {
    const response = await fetch(
      `http://localhost:8080/score/api/student/${st_num}/delete`
    );
    const result = await response.text();

    // 서버에서 삭제가 되었다는 메세지를 받으면 다시 서버에 데이터를 요청해 화면을 다시 그린다
    if (result === "OK") {
      alert("삭제 완료");
      fetchStudent();
    } else {
      alert("삭제 불가");
    }
  };

  /**
   * fetch 이용해 학번 체크 요청
   */
  const stNumCheck = async (st_num) => {
    const response = await fetch(`/api/student/${st_num}/check`);
    const result = await response.text();
    if (result === "OK") {
      alert("사용 가능한 학번");
    } else {
      alert("이미 사용중인 학번");
    }
  };

  const insertStudent = async () => {
    let url = "/api/student/insert";
    if (stdIsUpdate) {
      url = "/api/student/update";
    }
    const fetchData = {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(student),
    };
    const response = await fetch(url, fetchData);
    const result = await response.text();
    if (result === "OK") {
      alert("데이터 입력 완료");
      // ㅇㅕ기ㅏ맞는지확인
      fetchStudent();
    } else {
      alert("데이터 입력 실패");
    }
  };

  const getStudent = async (st_num) => {
    const response = await fetch(`/api/student/${st_num}`);
    const stJson = await response.json();
    setStudent(stJson);
    setStdUpdate(true);
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  // store 에 state 변수와 함수를 보관하기 위한 보관용 창고 생성
  const props = {
    studentList,
    setStudentList,
    student,
    setStudent,
    deleteStudent,
    insertStudent,
    stNumCheck,
    getStudent,
  };
  return (
    <ScoreContext.Provider value={props}>{children}</ScoreContext.Provider>
  );
};

export { ScoreContextProvider, useScoreContext };
