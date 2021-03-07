//como vou trabalho com o modls de Usrs 
const User = require("../models/User");

module.exports = {
    //bucar tudo no banco
    async index(req, res){
        // criei um const user passamos await para esperar 
        const users = await User.findAll();

        if(users == "" || users == null){
            return res.status(200).send({message:"Nenhun usuario cadastro na base !"})
        }
            return res.status(200).send({users});

    },
    //criar (salva) aglo no banco
    async store(req,res){
        const {name, email, password} = req.body;

        const user = await User.create({name:name, email:email, password:password})
        return res.status(200).send({
            status: 1,
            message: "usuario cadastardo com sucesso !",
            user
        });


    }, 
    //atulizar algo no banco
    async update(req, res){

        const {name, email, password} = req.body;

        const {user_id} = req.params;

        await User.update(
            {name:name, email:email, password:password
            }, {
                where:{
                    id:user_id
                }
             });

             return res.status(200).send({
                 status: 1,
                 message: "Usuario atualizado com sucesso !",
             });
             


    }, 
    //delete algo no banco
    async delete(req, res){

        const {user_id} = req.params;
         await User.destroy({
            where: {
                id:user_id
            }

         });
         return res.status(200).send({
            status: 1,
            message: "Usuario Excluido com sucesso !",
        });
        

    }
};