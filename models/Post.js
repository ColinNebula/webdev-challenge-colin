//imports
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Post extends Model {}

Post.init(
    {
        di: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isURL: true
            }
        },
        csv: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isCSV: true
            }

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