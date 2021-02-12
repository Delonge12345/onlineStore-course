const sequelize = require('../db')
const {DataTypes} = require('sequelize')


//Start to describe user model:
const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})


//Start to describe basket model:
const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})


//Start to describe basket_device model:
const BasketDevice = sequelize.define('basket_device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})


//Start to describe device model:
const Device = sequelize.define('device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},

})


//Start to describe type model:
const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},

})


//Start to describe brand model:
const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},

})


//Start to describe brand model:
const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},

})


//Start to describe device_info model:
const DeviceInfo = sequelize.define('device_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

//Create middle table

const TypeBoard = sequelize.define('type_board', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})


//Create connections between models

//User connections
User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)


//Basket connections
Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)


//Type connections
Type.hasMany(Device)
Device.belongsTo(Type)


//Brand connections
Brand.hasMany(Device)
Device.belongsTo(Brand)


//Device connections
Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(DeviceInfo)
DeviceInfo.belongsTo(Device)


//Type belongs to several models
Type.belongsToMany(Brand, {through: TypeBoard})
Brand.belongsToMany(Type, {through: TypeBoard})

module.exports = {
    User,
    Basket,
    BasketDevice,
    Type,
    Brand,
    Rating,
    Device,
    DeviceInfo,
    TypeBoard
}