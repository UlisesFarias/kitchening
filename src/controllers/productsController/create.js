const { leerJSON, escribirJSON } = require("../../data");
const Product = require("../../data/product");

module.exports =(req,res)=>{
    const{name,address,url_map,description,category} = req.body;

    const newProdcut= new Product(name, address, url_map,description, category);
    const products = leerJSON('products');
    products.push(newProdcut);

    escribirJSON(products,'products')

    return res.redirect('/admin')

}