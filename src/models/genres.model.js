const Sequelize = require("sequelize");
const connection = require('../../config/dbConn');

const genres = connection.define('genres', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        allowNull: false,
        primaryKey: true,
    },
    nameGenres: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    views: {
        type: Sequelize.NUMBER,
        allowNull: false,
    }
}, {
    freezeTableName: true,
    tableName: 'genres',
    paranoid: true,
});

module.exports = genres;