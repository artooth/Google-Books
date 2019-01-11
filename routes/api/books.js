const express = require('express');
const router = express.Router();

const Book = require('../../models/Book');

router.get('/', (req, res) => {
    Book.find({})
        .then(items => res.json(items))
})

module.exports = router;