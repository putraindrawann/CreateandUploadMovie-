const Sequelize = require("sequelize");
const connection = require('../../config/dbConn');

const Role = connection.define('rolemaster', {
    id: {
        type: Sequelize.UUIDV1,
        defaultValue: Sequelize.UUIDV1,
        allowNull: false,
        primaryKey: true,

    },
    role: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    freezeTableName: true,
    tableName: 'rolemaster'
    
});

module.exports = Role;