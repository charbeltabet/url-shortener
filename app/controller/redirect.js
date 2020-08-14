// CALL packages
const express = require('express');
const Redirection = require('../models/redirection.js');

// INITIALIZE router
router = express.Router();

// ROUTING
router.get('/:code', (req, res) => {
    Redirection.findOne({code: req.params.code}, (err, obj) => {
        if (obj) {
            return res.render('redirect.ejs', {
                longUrl: obj.longUrl,
                title: obj.title || 'Shortened url',
                description: obj.description || 'Shortened url\'s link'
            });
        }
    })
})

// EXPORT router
module.exports = router;
