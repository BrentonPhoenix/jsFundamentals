const { DataTypes } = require("sequelize");
const db = require("../db");

const JourPost = db.define("journalPost", {
    title: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
    entry: { 
        type: DataTypes.STRING,
        allowNull: false
    },
    owner: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = JourPost