const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
    shortId : {
        type: String,
        required: true,
        unique: true
    },
    redirectUrl : {
        type: String,
        required: true
    },
    visitHistory : [{ timestamp: { type: Number } }],
},
{ timestamps: true }
);

module.exports = mongoose.model('Url', UrlSchema);