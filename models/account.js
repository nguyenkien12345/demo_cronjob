const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
}, { timestamps: true });

mongoose.SchemaTypes.String.set('trim', true);

module.exports = mongoose.model('account', accountSchema);
