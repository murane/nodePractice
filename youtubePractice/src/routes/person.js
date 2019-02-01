var express = require('express');
var router = express.Router();

//QueryString => query property on the request object
//localhost:3000/person?name=fuckfuck&age=99
router.get('/person',(req, res) => {
    if(req.query.name){
        res.send(`you are Fucked ${req.query.name}`);
    }else{
        res.send(`you are Fucked`);
    }
    res.send('you are Fucked');
});

// Params property on the request object
//localhost:3000/person/sexsex
router.get('/person/:name',(req, res) => { 
    res.send(`you are Fucked ${req.params.name}`);
});

router.get('/error', (req, res) => {
    throw new Error('forced err');
})

module.exports = router;