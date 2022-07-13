import { sequelize, DataTypes } from "sequelize";
const model = sequelize.define("tbl_food", {
  d_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  d_date: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  d_food: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  d_qty: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  d_cal: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
export { model };
