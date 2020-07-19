const Sequelize = require("sequelize");
const connection = require('../../config/dbConn');

const movie = connection.define('movie', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        min: 6
    },
    duration: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    artists: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    genreId: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    watchURL: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    views: {
        type: Sequelize.NUMBER,
        allowNull: false,
    }
}, {
    freezeTableName: true,
    tableName: 'movie',
    paranoid: true,
});

module.exports = movie;