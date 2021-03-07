'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('productos', {
       id_producto:{
         type: Sequelize.INTEGER,
         allowNull: false,

       },
        name_product: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        desc_product :{
          type: Sequelize.STRING,
          allowNull: false,

        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }

      });

  },

  down: async (queryInterface, Sequelize) => {

    return await queryInterface.dropTable('productos');

  }
};
