require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DATABASE_URL } = process.env;
const FavoriteModel = require('./models/Favorite')
const UserModel = require('./models/User')


const sequelize = new Sequelize(
   DATABASE_URL, { logging: false, native: false }
);



FavoriteModel(sequelize)
UserModel(sequelize)

const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite,{through:'user_favorite',timestamps:false})
Favorite.belongsToMany(User,{through:'user_favorite',timestamps:false})


module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
