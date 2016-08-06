var express = require('express');
var router = express.Router();

router.route('/')

    //return all options
    .get(function(req, res){
        res.send({message:'send av options'});
    })

    .post(function(req, res){
        res.send({message: 'save new av option'});
    })
    
    .put(function(req, res){
        res.send({message: 'update av option'});  
    });

module.exports = router;
