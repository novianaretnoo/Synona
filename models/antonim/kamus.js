module.exports = (sequelize, Sequelize) => {
    const KamusAntonim = sequelize.define('kamusantonims', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        namaAwal: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        namaLawan: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    })
    return KamusAntonim
}