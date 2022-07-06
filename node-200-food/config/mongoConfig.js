const USERNAME = "ballza";
const PASSWORD = "!Korea8080";
const mongoURL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.ucqrkrp.mongodb.net/?retryWrites=true&w=majority`;
/*
mongoose 도구를 사용하여
NoSQL 인 mongoDB 에 DBMS Schema 방식으로 접근하기
*/
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const food = Schema({
  f_id: String,
  f_sdate: String,
  f_menu: String,
  f_value: Number,
  f_kcal: Number,
  f_kcal_all: Number,
  f_cancel: Boolean,
});

const food_model = mongoose.model("food", food);
export { mongoURL, food_model };
