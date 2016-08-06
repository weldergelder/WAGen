var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Antivirus = mongoose.model('antivirus');

router.route('/')


    .get(function(req, res){
    //Returns all AV options
        Antivirus.find(function(err, avList){
            if(err)
                return res.send({message: 'Error getting AV List'});
            return res.send(200, avList);
        });
    })

    .post(function(req, res){
    //Creates new AV Entry

        Antivirus.findOne({'title': req.body.title}, function(err, av){
            if(err){
                return res.send({message: 'Error has occurred'});
            }
            else {
                if(av){
                    res.send({message: 'Antivirus already exists'});
                }

                else{
                    var newAV = new Antivirus();
                    newAV.title = req.body.title;
                    newAV.count = 0;
                    newAV.text = req.body.text;

                    newAV.save(function(err, newAV){
                        if(err)
                            return res.send({message: 'Error adding new AV'});
                        return res.send({message: 'New AV entry created'});
                    });
                }
            }


        });
    })
    
    .put(function(req, res){
        res.send({message: 'update av option'});  
    });

module.exports = router;
