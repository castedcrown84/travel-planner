const express = require('express');
const sequelize = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))



sequelize.sync({force: true}).then(

app.listen(PORT, () => {



console.log(`Listening to server!`)


}))