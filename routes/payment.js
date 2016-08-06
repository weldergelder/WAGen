var express = require('express');
var router = express.Router();

router.route('/')

    //return all options
    .get(function(req, res){
        res.send({message:'send payment options'});
    })

    .post(function(req, res){
        res.send({message: 'save new payment option'});
    })
    
    .put(function(req, res){
        res.send({message: 'update payment option'});  
    });

router.route('/item')

    .get(function(req, res){
        res.send({message: 'send payment items'});
    })

    .post(function(req, res){
        res.send({message: 'save new payment item'});
    })

    .put(function(req, res){
        res.send({message: 'update payment item'});
    });


module.exports = router;
