import express from "express";
const router = express.Router();

import { db } from "../models/index.js";
const { tbl_food } = db;

router.get("/selectAll", (req, res) => {
  tbl_food.findAll().then((result) => res.json(result));
});

router.post("/insert", (req, res) => {
  req.body.d_id = 0;
  tbl_food
    .create(req.body)
    .then(res.json("OK"))
    .catch((err) => res.json(err));
});
router.delete("/remove/:id", (req, res) => {
  const id = req.params.id;
  tbl_food
    .destroy({ where: { d_id: id } })
    .then(res.json("OK"))
    .catch((err) => res.json(err));
});
export default router;
/**
 * router, controller 에서 사용하는 requestmethod : REST Ful 방식의 요청
 * get : 데이터를 요청(a href)
 * post : 데이터를 추가(form)
 * delete : 데이터를 삭제(Ajax/fetch로 전송 가능)
 * put : 데이터 업데이트(Ajax)
 */
