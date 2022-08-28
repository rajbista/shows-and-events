const mongoose = require('mongoose');

// Create Show Schema
const showSchema = new mongoose.Schema({
        title:String,
        slug: String,
        description: String,
        events: [String]
})

// Create Show Model Class
const Show = mongoose.model('Show', showSchema);


module.exports = Show;