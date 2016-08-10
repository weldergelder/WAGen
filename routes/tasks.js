var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Tasks = mongoose.model('tasks');

router.route('/')

    .get(function(req, res){
    //Returns all task options
        Tasks.find(function(err, taskList){
            if(err)
                return res.send({message: 'Error getting task list'});
            return res.send(200, taskList);
        });
    })

    .post(function(req, res){
    //Creates new task Entry

        Tasks.findOne({'title': req.body.title}, function(err, tsk){
            if(err){
                return res.send({message: 'Error has occurred'});
            }
            else {
                if(tsk){
                    res.send({message: 'Task already exists'});
                }

                else{
                    var newTask = new Tasks();
                    newTask.title = req.body.title;
                    newTask.count = 0;
                    newTask.text = req.body.text;
                    newTask.textbox = req.body.textbox;
                    newTask.save(function(err, newAV){
                        if(err)
                            return res.send({message: 'Error adding new Task'});
                        return res.send({message: 'New Task entry created'});
                    });
                }
            }


        });
    })

    .delete(function(req, res){
        //Delete a task entry
        Tasks.findOne({'title': req.body.title}, function(err, tsk){
            if(err){
                return res.send({message:'Error has occurred'});
            }
            if(tsk){
                Tasks.remove({title: req.body.title},
                function(err) {
                    if(err) return res.send({message: 'Error has occurred'});
                });

                return res.send({message: 'Task deleted successfully'});
            }
            else{
                return res.send({message: 'Task not found'});
            }

        });
    })
    
    .put(function(req, res){
        Tasks.findOne({'title': req.body.title}, function(err, tsk){
            if(err)
                return res.send({message: 'Error has occurred'});
            if(tsk){
                tsk.title = req.body.newTitle;
                tsk.text = req.body.text;
                tsk.count = req.body.count;
                tsk.textbox = req.body.textbox;
                tsk.save(function(err, tsk){
                    if(err)
                        res.send({message: 'Error has occurred'});
                    return res.send({message: 'Task Record updated successfully'});
                });
            }
            else{
                return res.send({message: 'Task not found'});
            }

        });
    });



module.exports = router;
