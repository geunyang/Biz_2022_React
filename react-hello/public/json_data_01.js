const student = {
  st_num: 1,
  st_name: "홍길동",
  st_grade: 3,
  st_dept: "컴공과",
};

console.table(student);

console.log(student.st_name);
console.log(student.st_num);

// js 에서 json 객체데이터는 자체를 const(read only) 로 선언해도 각 속성(요소데이터) 를 변경 할 수 있다
student.st_name = "이몽룡";

console.log(student);

/*
json 객체를 일반 객체로 변환하는 방법
student 에서 st_name, st_dept 내용을 추출해 st_name, st_dept 를 새로 만들어서 저장하라
*/
/*
JSON 객체 분해, 펼치기, spread
student 객체에 저장된 값 중에서 st_name, st_dept 속성에
저장된 값만 추출하고, st_name, st_dept 단일 변수를 선언하여
저장해달라
*/
const { st_name, st_dept } = student;
console.log(st_name, st_dept);
