const { DataTypes } = require('sequelize')

const NoteModel = (sequelize) => sequelize.define('Notes', {
  id: {
    type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
  },
  heading: DataTypes.STRING,
  content: DataTypes.STRING,
});

module.exports = NoteModel