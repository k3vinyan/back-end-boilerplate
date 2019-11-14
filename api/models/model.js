const mongoose = require('mongoose');
const { Schema } = mongoose;

const somethingSchema = new Schema(
    {
        someKey: {
            type: String,
            required: 'this is required'
        }
    }
);

module.exports =    mongoose.model('Something', somethingSchema);