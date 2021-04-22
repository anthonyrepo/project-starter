'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Place extends Model {}

  Place.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100],
        notEmpty: true,
      }
    },
    type: {
        type: DataTypes.STRING,
        validate: {
            len: [1, 20],
            notEmpty: true,
        }
    },
    votes: {
        type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'place'
  });

  Place.associate = (models) => {
    // associations can be defined here
  };

  return Place;
};