const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(logger('dev'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(routes);

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://user1:password1@ds145128.mlab.com:45128/heroku_dtjpqkqp', {useNewUrlParser: true});

app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
