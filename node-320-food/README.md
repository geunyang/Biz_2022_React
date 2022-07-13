# 다이어트를 도와줘
* 오늘 하루 섭취한 식품의 칼로리가 얼마인지 기록하여 다이어트에 도움을 주는 App
* MySQL + Express + React + NodeJS 연동 프로젝트

## NodeJS backEnd Preject 를 생성하기 위하여
* 프로젝트 생성 : express-21c node-320-food
* 프로젝트 폴더에서 터미널 실행 : npm install

## React frontEnd Project 를 생성하기 위하여
* node-310-food 폴더에서 ```create-react-app client``` 생성
* client 폴더에서 터미널 열기
* yarn 실행하여 update
* yarn build 실행하여 build 생성
* node-310-food/client/build 폴더 생성 확인

## nodeJS 에서 client 인식시키기
* nodejs-320-food/app.js 파일열
* ```app.use(express.static(path.join("./client/build")));``` 변경
* ```app.use("/", indexRouter);``` 삭제 또는 주석
* nodejs-320-food 폴더에서 서버 start : ```nodemon``` 실행
* web browser 에서 localhost:3000 주소 입력하여 react 화면 출력 확인

## React 프로젝트 파일 이름 변경
* App. 으로 시작되는 파일명을 모두 ReactJS. 로 변경
* 이름 변경 후 import 부분 본문 부분 꼼꼼히 확인할것
* css 에서 헤더 크기조절
* public 폴더 index.html 에서 default 언어 부분 수정

## MySQL DB 연동하기
* MySQL DB 와 연동하기 위해 Dependency 설치, 설치후 package.json 에서 확인
```
npm install mysql2
npm install sequelize
npm install moment
```

* Sequelize 도구 설치: sql 문을 몰라도 사용할수 있게 도와주는 도구. 관리자 cmd 에서 반드시 global 로 설치
```
npm install -g sequelize-cli
npm install -g sequelize-auto
npm install -g mysql2
```

* Sequelize 도구를 사용하여 mysql DB 연동 정보 자동화 : 터미널
```
sequelize init
sequelize-auto -o "./models" -d mydb -h 127.0.0.1 -u username -x 'password' -e mysql -l esm
```

* sequelize 가 schema 자동생성 해줌
* sequelize-auto 사용시 ```-l esm``` 옵션을 생략하면 CommonsJS(ES5 이전) 버전으로 모듈 생성
* password 에 특문 포함시 반드시 작은따옴표''로 묶어야함 큰따옴표는 문자로 인식해 오류 발생
* 선택사항들
```
-o 폴더 : model 설정 파일들이 출력될곳 (out)
-d DB 명 : 사용할 mysql DB
-h Host : MySQL 서버가 설치된 컴퓨터의 ip, localhost, 127.0.0.1
-u username : MySQL 접속 권한이 있는 사용자 이름
-x password : MySQL 사용자 비밀번호
-e MySQL : 사용할 데이터베이스 소프트웨어(engine) 지정
-l ems : ES6+ 버전으로 생성하기
-l es5 : ES5 버전으로 생성하기
-p PORTNUM : port 3306 외 다른 포트를 사용할 경우 지정
```