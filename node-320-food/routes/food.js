import express from "express";
const router = express.Router();

export default router;
/**
 * router, controller 에서 사용하는 requestmethod : REST Ful 방식의 요청
 * get : 데이터를 요청(a href)
 * post : 데이터를 추가(form)
 * delete : 데이터를 삭제(Ajax/fetch로 전송 가능)
 * put : 데이터 업데이트(Ajax)
 */
