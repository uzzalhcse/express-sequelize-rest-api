// models/user.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Define associations if needed
    }
  }

  User.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        avatar: {
          type: DataTypes.STRING, // Assuming avatar is a URL or file path
        },
        mobile: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: 'User',
      }
  );

  return User;
};

