const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        require: true
    }
})

module.exports = Book = mongoose.model('book', ItemSchema);