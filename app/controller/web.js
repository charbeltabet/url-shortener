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
    return res.render('home.ejs');
});

router.post('', algorithm, (req, res) => {
    code = res.redirection.code;
    return res.redirect('/info/' + code)
    // return res.render('result.ejs', {redirection: res.redirection, hostName: process.env.hostName});
});

router.get('/info/:code', async (req, res) => {
    q = queries.fetch(req.params.code);
    q.exec((err, obj) => {
        info = obj;
        return res.render('info.ejs', {info: info});
    });
});

// EXPORT router
module.exports = router;
