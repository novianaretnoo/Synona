//untuk menjalankan semua model yg ada pada project
const dbConfig = require('../config/db')
const Sequlize = require('sequelize')
const sequelize = new Sequlize(
    dbConfig.db,
    dbConfig.user,
    dbConfig.pass, {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        operatorAlias: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        },
    },
)
const db = {}
db.Sequlize = Sequlize
db.sequelize = sequelize

db.quizzes = require('./quiz')(sequelize, Sequlize)
module.exports = db