const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
    title:String,
    slug: String,
    isActive: Boolean
})

module.exports = {
    organizationSchema
}