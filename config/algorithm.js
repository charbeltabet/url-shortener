// CALL packages
const validate = require('./validate.js');
const generate = require('./generate.js');
const Redirection = require('../app/models/redirection.js');
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

// URL SHORTENING algorithm
const algorithm = (req, res, next) => {
    // GET submitted data
    longUrl = req.body.longUrl;
    title = req.body.title;
    description = req.body.description;
    // VALIDATE url
    if (validate(longUrl)) {
        // GENERATE code
        code = generate(longUrl);
        // SAVE redirection to database
        var redirection = new Redirection({
            longUrl: req.body.longUrl,
            shortUrl: 'https://' + req.get('host') + '/' + code,
            code: code,
            title: title,
            description: description
        });
        redirection.save();
        res.redirection = redirection
        next();
    }
}

module.exports = algorithm;
