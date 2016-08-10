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


    .delete(function(req, res){
        Antivirus.findOne({'title': req.body.title}, function(err, av){
            if(err){
                return res.send({message:'Error has occurred'});
            }
            if(av){
                Antivirus.remove({title: req.body.title},
                function(err) {
                    if(err) return res.send({message: 'Error has occurred'});
                });

                return res.send({message: 'AV deleted successfully'});
            }
            else{
                return res.send({message: 'AV not found'});
            }

        });
    })
    
    .put(function(req, res){
        Antivirus.findOne({'title': req.body.title}, function(err, av){
            if(err)
                return res.send({message: 'Error has occurred'});
            if(av){
                av.title = req.body.title;
                av.text = req.body.text;
                av.count = req.body.count;
                av.save(function(err, av){
                    if(err)
                        res.send({message: 'Error has occurred'});
                    return res.send({message: 'AV Record updated successfully'});
                });
            }
            else{
                return res.send({message: 'AV not found'});
            }

        });
    });

module.exports = router;
