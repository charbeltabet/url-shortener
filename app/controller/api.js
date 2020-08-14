// CALL packages
const express = require('express');
const algorithm = require('../../config/algorithm.js');
const queries = require('../../config/queries.js');
const dotenv = require('dotenv');
dotenv.config({ path: '../../.env' });

// INITIALIZE router
router = express.Router();

// ROUTING
router.get('', (req, res) => {
    return res.send('Api received empty GET request')
});

router.post('', algorithm, (req, res) => {
    return res.json(res.redirection);
});

router.get('/info/:code', async (req, res) => {
    q = queries.fetch(req.params.code);
    q.exec((err, obj) => {
        return res.json(obj);
    });
});

// EXPORT router
module.exports = router;