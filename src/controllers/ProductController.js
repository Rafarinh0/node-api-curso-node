const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    // Rota de Listagem  
    async index(req, res){
        const products = await Product.find();
        // o retorno só vai ocorrer depois que todos os registros do banco de dados
        // forem achados, tudo isso por causa do await. 

        return res.json(products);
    },

    //Rota de Detalhes
    async show(req,res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    // Rota de Criação
    async store(req, res){
        // Criação de produtos
        const product = await Product.create(req.body);//Passa como parâmetro todos os campos que
                                                       //estão no corpo da requisição
        return res.json(product);
    },

    // Rota de Atualização
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id,req.body, {new: true})
        // Vai encontrar um produto pelo id dele e atualizar ele com o conteúdo que vem do req.body

        //O "new: true" pede que o mongoose retorne o produto atualizado pra variável product
        //Caso contrário, a função vai retornar pro product o produto antes de atualizar o req.body
        return res.json(product);
    },

    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
        //só manda uma mensagem de sucesso mesmo
    }
};