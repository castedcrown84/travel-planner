const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');



class Trip extends Model {}

Trip.init(

{
    id:{

        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:false



    }


},


{

    sequelize,
    modelName: 'trip',
    freezeTableName:true

}







)