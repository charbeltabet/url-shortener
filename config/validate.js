// CALL pacakges
const validUrl = require('valid-url');
const generate = require('./generate.js');

// MODULE
const validate = (url) => {
    // url validation process
    if (validUrl.isWebUri(url)){
        // return generate();
        return true
    }
    else {
        return false;
    }
}

// EXPORT module
module.exports = validate
