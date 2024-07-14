import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize("postgres://user:pass@localhost:5432/mydb");

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ethnicity: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  music: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  interests: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  hobbies: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
});

export default User;
