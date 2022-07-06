// Nodejs, Express Project 의 Web Framework
import express from "express";
import { food_model } from "../config/mongoConfig.js";

/*
import 된 도구를 사용하는 방법 2가지

괄호 있 긴 이름을 축약하겠다
express.Router 함수(객체)를 router라는 이름으로 사용하겠다
const router =  express.Router

괄호 없 함수를 호출해서 router 에 담겠다
express.Router() 함수를 실행하여 return 된 결과를 router 변수에 담아라
const router =  express.Router()
*/
const router = express.Router();

//3개의 매개변수를 갖는 콜백함수
/*
/ 로 요청하면 3개의 함수를 실행하는데 req, res 값을 전달하라

req:요청한 데이터가 담겨서 전달
res: 응답할 때 데이터를 담아서 전달
?name=... name 에 담겨있는 값이 있으면 query 에 담아주라

*/
router.get("/", (req, res, next) => {
  const query = req.query.name;
  //   res.send("나에게 전달된 값" + query);
  res.json({ name: query });
});

// localhost:3000/bucket 주소로 POST 데이터가 전송되어오면
router.post("/", (req, res) => {
  const body = req.body;
  console.table(body);
  // bucket_model 에 설정된 사항을 참조하여 req.body 에 담겨서 전달된 데이터를 INSERT 수행하라
  food_model.create(body).then(() => res.send("OK"));
});
// 버켓에 담겨있는 모든 데이터를 select all 해서 결과가 오면 result 에 담고 담겨있는 것을 client로 json type 으로 보내라
router.get("/list", (req, res) => {
  /* 
  bucket_model 에 설정된 사항을 참조하여 모든 {} 데이터를 selectAll(find()) 하고
  결과를 result 변수에 받고 result 변수에 받은 데이터를 JSON type 으로 client 에게 보내라
  */
  food_model.find({}).then((result) => res.json(result));
});
export default router;
