const Product = require('../models/Product');


module.exports = {
    
    async index(req, res){
        // criei um const user passamos await para esperar 
        const products = await Product.findAll();

        if(products == "" || products == null){
            return res.status(200).send({message:"Nenhun usuario cadastro na base !"})
        }
            return res.status(200).send({products});



    },
    async sotre(req, res){

    },
    async uptade(req, res){

    },
    async delete(req, res){

    }
}