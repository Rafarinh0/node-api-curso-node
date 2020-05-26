const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){
        const products = await Product.find();
        // o retorno só vai ocorrer depois que todos os registros do banco de dados
        // forem achados, tudo isso por causa do await.

        return res.json(products);
    }
};