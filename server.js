const express = require('express');
const app = express();
const fs = require('fs');
const PORT = 3000;

app.use(express.json());

function readProductos() {
    const data = fs.readFileSync('productos.json', 'uft-8');
    return JSON.parse(data);
}

function saveProducto(productos){
    fs.writeFileSync('productos.json',JSON.stringify(productos,null,2));
}

app.get('/productos/:id', (req,res) => {
    let id = req.params.id;
    console.log(id);
    res.json({})
})

app.get('/productos', (req, res) => {
    res.status(200).json({ status: 200, message: 'Success', data: readProductos() })
})