const Sequelize = require('sequelize')
const conn = new Sequelize(process.env.DATABASE_URL|| 'postgres://localhost/acme_products_specials_react_db');


const regProduct=conn.define('regProduct',{
    name:{type:Sequelize.STRING},
})

const speProduct=conn.define('speProduct',{
    name:{type:Sequelize.STRING},
})


const sync =()=>{
    return conn.sync({force:true});
}

const seed =()=>{
    return Promise.all([
    regProduct.create({name:'foo'}),
    regProduct.create({name:'bar'}),
    ]).
    then(Promise.all([
        speProduct.create({name:'bazz'}),
        ]))

}

module.exports ={
    sync,
    seed,
    regProduct,
    speProduct

};