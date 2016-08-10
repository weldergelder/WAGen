var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Backup = mongoose.model('backup');

router.route('/')

    .get(function(req, res){
    //Returns all backup options
        Backup.find(function(err, buList){
            if(err)
                return res.send({message: 'Error getting Backup List'});
            return res.send(200, buList);
        });
    })

    .post(function(req, res){
    //Creates new backup Entry

        Backup.findOne({'title': req.body.title}, function(err, bu){
            if(err){
                return res.send({message: 'Error has occurred'});
            }
            else {
                if(bu){
                    res.send({message: 'Backup option already exists'});
                }

                else{
                    var newBU = new Backup();
                    newBU.title = req.body.title;
                    newBU.count = 0;
                    newBU.text = req.body.text;
                    newBU.textbox = req.body.textbox;
                    newBU.save(function(err, newBU){
                        if(err)
                            return res.send({message: 'Error adding new backup option'});
                        return res.send({message: 'New backup entry created'});
                    });
                }
            }


        });
    })


    .delete(function(req, res){
        Backup.findOne({'title': req.body.title}, function(err, bu){
            if(err){
                return res.send({message:'Error has occurred'});
            }
            if(bu){
                Backup.remove({title: req.body.title},
                function(err) {
                    if(err) return res.send({message: 'Error has occurred'});
                });

                return res.send({message: 'Backup option deleted successfully'});
            }
            else{
                return res.send({message: 'Backup option not found'});
            }

        });
    })
    
    .put(function(req, res){
        Backup.findOne({'title': req.body.title}, function(err, bu){
            if(err)
                return res.send({message: 'Error has occurred'});
            if(bu){
                bu.title = req.body.newTitle;
                bu.text = req.body.text;
                bu.count = req.body.count;
                bu.textbox = req.body.textbox;
                bu.save(function(err, bu){
                    if(err)
                        res.send({message: 'Error has occurred'});
                    return res.send({message: 'Backup Record updated successfully'});
                });
            }
            else{
                return res.send({message: 'Backup option not found'});
            }

        });
    });


module.exports = router;
