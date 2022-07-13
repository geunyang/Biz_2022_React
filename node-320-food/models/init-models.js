import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _tbl_ems from "./tbl_ems.js";

export default function initModels(sequelize) {
  const tbl_ems = _tbl_ems.init(sequelize, DataTypes);

  return {
    tbl_ems,
  };
}
