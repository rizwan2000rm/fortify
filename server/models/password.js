// Password Schema
module.exports = (sequelize, DataTypes) => {
  let Password = sequelize.define("Password", {
    url: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  });

  return Password;
};
