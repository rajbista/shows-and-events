const mongoose = require('mongoose');

// Create Show Schema
const showSchema = new mongoose.Schema({
        showId: String,
        title:String,
        slug: String,
        description: String,
        events: [
                {
                        eventId: String
                }
        ]
})

// Create Show Model Class
const Show = mongoose.model('Show', showSchema);


module.exports = Show;