const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Traveller extends Model {}

Traveller.init(

{

    id:{

        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
     },
     name:{

        type:DataTypes.STRING,
        allowNull:false


     },
     email:{

        type: DataTypes.STRING,
        unique:true,
        validate:{

            isEmail:true

        }





     }

},

{

    sequelize,
    freezeTableName:true,
    underscored:true,
    timestamps:false,
    modelName:"travellers"



})

module.exports = Traveller;