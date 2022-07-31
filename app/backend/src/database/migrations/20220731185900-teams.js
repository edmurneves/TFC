module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('teams', {
            id: {
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER,
            },
            team_name: {
                type: Sequelize.STRING,
                allowNull: false,
            }
        });
    },
    down: async (queryInterface) => {
        await queryInterface.dropTable('teams');
    },
};