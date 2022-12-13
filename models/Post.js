//imports
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Post extends Model {}

// create fields/columns for Post model
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
            
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lot_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lot_location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lot_condition: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pre_tax_amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        tax_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tax_amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
        {
            sequelize,
            freezeTableName: true,
            underscored: true,
            modelName: 'post'
        }
);

module.exports = Post;