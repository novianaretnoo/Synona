module.exports = (sequelize, Sequelize) => {
    const KamusSynonim = sequelize.define('kamussynonims', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        namaAwal: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        namaSama: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    })
    return KamusSynonim
}