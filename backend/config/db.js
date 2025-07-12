const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('BlendedBeats_event_db', 'root', 'your_mysql_password', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
