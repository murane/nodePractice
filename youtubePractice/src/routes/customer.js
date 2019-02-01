var CustomerModel = require('../models/customer.model');
var express = require('express');
var router = express.Router();

//Create a new customer
// POST /customer

router.post('/customer', (req, res) => {
    //req.body
    if(!req.body) {
        return res.status(400).send('Request body is missing');
    }

    // var user = {
    // name: 'first last',
    // email: 'mail@adsf.com'
    // };

    var model = new CustomerModel(req.body);
    model.save()
        .then(doc => {
            if(!doc || doc.length === 0) {
                return res.status(500).send(doc)
            }
            res.status(201).send(doc);
        })
        .catch(err => {
            res.status(500).json(err);
        });
})

module.exports = router;