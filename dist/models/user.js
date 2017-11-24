'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    picture: {
      type: DataTypes.BLOB
    },
    description: {
      type: DataTypes.STRING
    },
    tagline: {
      type: DataTypes.STRING
    }
  });

  User.associate = function (models) {
    User.hasMany(models.Event, { as: 'events', foreignKey: 'user' });
    User.hasMany(models.EventCenter, { as: 'centers', foreignKey: 'user' });
  };

  // Use hook to save hashed password later
  /* eslint-disable no-param-reassign */
  // User.hook('beforeValidate', (user) => {
  //   const hash = bcrypt.hashSync(user.password, 10);
  //   user.password = hash;
  // });
  /* eslint-disable no-param-reassign */

  return User;
};