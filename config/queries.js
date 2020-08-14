// CALL model
const Redirection = require('../app/models/redirection.js');

// Mongoose queries
const fetch = (code) => {
    return Redirection.findOne({code: code});
}

// EXPORT queries
module.exports = {
    fetch
}
