var express = require('express');
var router = express.Router();

router.route('/')

    //return all options
    .get(function(req, res){
        res.send({message:'send backup options'});
    })

    .post(function(req, res){
        res.send({message: 'save new backup option'});
    })
    
    .put(function(req, res){
        res.send({message: 'update backup option'});  
    });


module.exports = router;
