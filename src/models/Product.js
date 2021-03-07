//importando sequelize e pegando o Model e DataTypes Do sequelize.
const {Model, DataTypes} = require('sequelize');


class Product extends Model{
    static init(sequelize) {
        super.init({
            id_producto: DataTypes.STRING,
            name_product: DataTypes.STRING,
            desc_product: DataTypes.STRING,
        
        }, {sequelize})
    }
}

module.exports = Product;