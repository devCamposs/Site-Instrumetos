const path = require('path')
const fs = require('fs');

const produtoJson = path.join(__dirname,'../products.json');
const produtos = JSON.parse(fs.readFileSync(produtoJson))

const produtosControllers = {
    index: (req, res) => {
        
        let categoria = req.query.categoria//pega os parâmetros da url
        
        if (!categoria)
            res.render('produtos', { produtos: produtos })

        else {
            let resultado = produtos.filter(p => p.categoria == categoria)
            res.render('produtos', { produtos: resultado })

        }

    },

    //Edit
    edit: (req, res) => {
    let id = req.params.id
    let productToEdit = products.find(product => product.id == id)
    res.render('pageProductEdit', {productToEdit})
    },
    //Update POST
    update: (req, res) => {
    let id = req.params.id;
    let productToEdit = products.find(product => product.id == id)
    let image;
    if (req.files[0] != undefined){
        image = req.files [0].filename
    }else{
        image = productToEdit.image
    }
    productToEdit = {
        id: productToEdit.id,
        ...req.body,
        image: image,
    }}

}
module.exports = produtosControllers;
