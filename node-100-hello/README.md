# NodeJS, Express, React Full Stack Project
* NodeJS, Express 프로젝트를 생성하기 위한 도구 설치 : ```npm install -g express-21c```
* NodeJS, Express 프로젝트 생성 : ```express-21c myproject```
* myproject 폴더에서 React client 프로젝트 생성 ```create-react-app client```
* NodeJS 프로젝트와 React 프로젝트 관련 파일들의 이름이 혼동될 수 있으니 파일 이름 변경 ```App.js``` 파일을  ```React.js``` 파일로,
```App.css``` 파일을 ```React.css``` 파일로, ```App.test.js``` 파일을 ```React.test.js``` 파일로 모두 변경
* ```client/src/index.js``` 파일을 열어서 ```import App from "./App.js"``` 부분을 ```import ReactJS from "./React.js"``` 로 변경
* 기타 파일 import 부분에 오류가 있는지 검사
* React Client Build : react 에 접근할 수 있게 ```yarn build``` 
* client/build 폴더 생성확인

# nodejs 서버와 React client 연동
* node 서버의 app.js 파일을 열어서 static 설정을 ```./client/build``` 로 변경
* node 서버의 실행 웹 화면을 새로고침 하여 React 화면이 나타나는지 확인

# Nodejs 와 mongoDB 연동
* mongoDB 는 local 에 서버를 설치하여 사용할 수도 있고 mongodb.com 에 회원가입을 하여 무료 cloud 서비스를 이용할 수도 있다
* Nodejs 와 mongoDB 를 연동하기 위하여 Dependency 를 설치하기 mongoose 를 설치하여 NoSQL 을 DBMS Schema 처럼 사용한다
```npm install mongoose```

# 서버 실행 nodemon 서버에 접근하면 react 화면 보여줌

# MERN stack