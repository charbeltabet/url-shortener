// CALL packages
const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

// CONNECT to database
mongoose.connect(process.env.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => console.log('Connected to DB'))
.catch((err) => console.log(`DB connection Error ${err}`));

// CONFIGURE express app
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', 'app/views');

// USE routers
const webRoutes = require('./app/controller/web.js');
app.use('/', webRoutes);
const apiRoutes = require('./app/controller/api.js');
app.use('/api', apiRoutes);
const redirect = require('./app/controller/redirect.js');
app.use('/', redirect);

// Server
PORT = process.env.PORT || 8000;
app.listen(PORT, () => {console.log(`App running on port ${PORT}`)});
