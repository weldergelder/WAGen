var express = require('express');
var router = express.Router();

router.route('/')

    //return all options
    .get(function(req, res){
        res.send({message:'send task options'});
    })

    .post(function(req, res){
        res.send({message: 'save new task option'});
    })
    
    .put(function(req, res){
        res.send({message: 'update task option'});  
    });


module.exports = router;
