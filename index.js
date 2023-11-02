const express = require('express')
const mongoose = require('mongoose')
const app = express();

app.use(express.json())
app.use(require('./routes/students.route.js'));

mongoose.connect("mongodb+srv://Zurabi:qwerty123@monogo.qczznmz.mongodb.net/test?retryWrites=true&w=majority")
.then(() => console.log('успешно соединились с сервером MongoDB'))
.catch(() => console.log('ощибка при соединений с сервером MongoDB'))


app.listen(4000, () => {
    console.log("сервер успешно запущен");
}) 