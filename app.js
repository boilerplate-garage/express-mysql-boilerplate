'use strict';

var Express = require('express');
var routes = require('./routes.js');

var app = Express();

routes.setup(app);
app.listen(8000);

console.log('Server runnging at 8000');
