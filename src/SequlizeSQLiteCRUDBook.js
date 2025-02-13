const express = require('express')
const Sequelize = require('sequelize')
const app = express()

app.use(express.json())

const sequelize = new Sequelize('database','username,password',{
    host:'localhost',
    dialect:'sqlite',
    storage: './Database/SQBook.sqlite'
})
const Book = sequelize.define('book',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    author:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

app.get('/books',(req,res)=>{
    Book.find().then(book =>{
        res.json(books);
    }).eatch(err => {
        res.status(500).send(err)
    })
})