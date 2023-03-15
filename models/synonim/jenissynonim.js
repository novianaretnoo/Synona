module.exports = (sequelize, Sequelize) => {
    const JenisSynonim = sequelize.define('jsynonims', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        synonimMutlak: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        synonimSemirip: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        synonimSelingkung: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    })
    return JenisSynonim
}