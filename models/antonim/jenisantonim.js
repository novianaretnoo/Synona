module.exports = (sequelize, Sequelize) => {
    const JenisAntonim = sequelize.define('jantonims', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        antonimBiner: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        antonimNonBiner: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    })
    return JenisAntonim
}