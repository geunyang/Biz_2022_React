import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tbl_ems extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    e_seq: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    e_from_email: {
      type: DataTypes.STRING(125),
      allowNull: false
    },
    e_to_email: {
      type: DataTypes.STRING(125),
      allowNull: false
    },
    e_from_name: {
      type: DataTypes.STRING(125),
      allowNull: false
    },
    e_to_name: {
      type: DataTypes.STRING(125),
      allowNull: false
    },
    e_subject: {
      type: DataTypes.STRING(125),
      allowNull: false
    },
    e_content: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    e_send_date: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    e_send_time: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_ems',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "e_seq" },
        ]
      },
    ]
  });
  }
}
