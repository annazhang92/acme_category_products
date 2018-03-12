const express =require ('express');
const app =express();
const path = require("path");
const db=require('./db')
const regProduct = db.regProduct;
const speProduct=db.speProduct;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port =process.env.PORT || 3000;

db.sync()
.then(()=>db.seed());

app.use(express.static(path.join(__dirname, ".")));

app.get('/api/regProduct',(req,res,next)=>{
    regProduct.findAll()
    .then(products=>res.send(products))

})

app.get('/api/speProduct',(req,res,next)=>{
    speProduct.findAll()
    .then(products=>res.send(products))

})

app.post('/api/regProduct',(req,res,next)=>{
    regProduct.create(req.body);
    speProduct.findOne({ where: { name: req.body.name } })
    .then(product => {
        return product.destroy();
      })
})

app.post('/api/speProduct',(req,res,next)=>{
    speProduct.create(req.body);
    regProduct.findOne({ where: { name: req.body.name } })
    .then(product => {
        return product.destroy();
      })
})





app.listen(port,()=>console.log(`listening on port ${port}`))
