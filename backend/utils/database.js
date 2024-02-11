const Sequelize = require("sequelize")
const sequelize = new Sequelize(
    "parc_info",
    "root",
    "",
    {
        dialect: 'mysql',
        host: "localhost"
    }
)
module.exports = sequelize
// const dbConnection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "parc_info"
// })


// dbConnection.connect(function (error) {
//     if (error) {
//         console.log('error when trying to connecte to database'.bgRed);
//     } else {
//         console.log('connected to the database'.bgGreen);
//     }
// })
