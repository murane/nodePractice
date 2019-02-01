var express = require('express');
var app = express();

var personRoute = require('./routes/person');
var customerRoute = require('./routes/customer');

var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);
    next();
});

app.use(personRoute);
app.use(customerRoute);
app.use(express.static('public'));

//Handler for 404 - Resource Not Found
app.use((req, res, next) => {
    res.status(404).send("we are lost!");
});

//Handler for Error 500
app.use((err, req, res, next) => {
    console.error(err.stack);

    res.sendFile(path.join(__dirname,'../public/500.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.info(`Server has started on ${PORT}`));