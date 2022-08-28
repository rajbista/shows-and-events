const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
    orgId: String,
    title:String,
    slug: String,
    isActive: Boolean
})

module.exports = {
    organizationSchema
}