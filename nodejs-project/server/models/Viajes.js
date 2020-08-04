const Sequelize = require('sequelize');
const db = require('../config/database');

const Viaje = db.define('viaje', {
    title: {
        type: Sequelize.STRING
    },
    pricing: {
        type: Sequelize.STRING
    },
    go_date: {
        type: Sequelize.DATE
    },
    back_date: {
        type: Sequelize.DATE
    },
    image: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    available_places: {
        type: Sequelize.STRING
    },
});

module.exports = Viaje;