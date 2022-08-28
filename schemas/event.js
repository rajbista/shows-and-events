const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventId: String,
    name:String,
    ticket_url: String,
    dateTime: {type: Date, default: Date.now},
    show: {
        title: String
    }
})

module.exports = {
    eventSchema
}