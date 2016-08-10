var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Payments = mongoose.model('payment');
var Items = mongoose.model('items');

router.route('/')

    .get(function(req, res){
    //Returns all payment options
        Payments.find(function(err, payList){
            if(err)
                return res.send({message: 'Error getting payment options'});
            return res.send(200, payList);
        });
    })

    .post(function(req, res){
    //Creates new payment option

        Payments.findOne({'title': req.body.title}, function(err, pmt){
            if(err){
                return res.send({message: 'Error has occurred'});
            }
            else {
                if(pmt){
                    res.send({message: 'Payment option exists'});
                }

                else{
                    var newPay = new Payments();
                    newPay.title = req.body.title;
                    newPay.count = 0;
                    newPay.text = req.body.text;

                    newPay.save(function(err, newPay){
                        if(err)
                            return res.send({message: 'Error adding new payment option'});
                        return res.send({message: 'New payment option created'});
                    });
                }
            }


        });
    })

    .delete(function(req, res){
        //Delete a payment option
        Payments.findOne({'title': req.body.title}, function(err, pmt){
            if(err){
                return res.send({message:'Error has occurred'});
            }
            if(pmt){
                Payments.remove({title: req.body.title},
                function(err) {
                    if(err) return res.send({message: 'Error has occurred'});
                });

                return res.send({message: 'Payment option deleted successfully'});
            }
            else{
                return res.send({message: 'Payment option not found'});
            }

        });
    })

    .put(function(req, res){
        Payments.findOne({'title': req.body.title}, function(err, pmt){
            if(err)
                return res.send({message: 'Error has occurred'});
            if(pmt){
                pmt.title = req.body.newTitle;
                pmt.text = req.body.text;
                pmt.count = req.body.count;
                pmt.save(function(err, pmt){
                    if(err)
                        res.send({message: 'Error has occurred'});
                    return res.send({message: 'Payment option updated successfully'});
                });
            }
            else{
                return res.send({message: 'Payment option not found not found'});
            }

        });
    });

router.route('/item')

    .get(function(req, res){
    //Returns all items
        Items.find(function(err, itemList){
            if(err)
                return res.send({message: 'Error getting item list'});
            return res.send(200, itemList);
        });
    })

    .post(function(req, res){
    //Creates new item

        Items.findOne({'title': req.body.title}, function(err, itm){
            if(err){
                return res.send({message: 'Error has occurred'});
            }
            else {
                if(itm){
                    res.send({message: 'Item already exists'});
                }

                else{
                    var newItem = new Items();
                    newItem.title = req.body.title;
                    newItem.count = 0;
                    newItem.text = req.body.text;
                    newItem.cost = req.body.cost;

                    newItem.save(function(err, newItem){
                        if(err)
                            return res.send({message: 'Error adding new item'});
                        return res.send({message: 'New item created'});
                    });
                }
            }


        });
    })

    .delete(function(req, res){
        //Delete an item
        Items.findOne({'title': req.body.title}, function(err, itm){
            if(err){
                return res.send({message:'Error has occurred'});
            }
            if(itm){
                Items.remove({title: req.body.title},
                function(err) {
                    if(err) return res.send({message: 'Error has occurred'});
                });

                return res.send({message: 'Item deleted successfully'});
            }
            else{
                return res.send({message: 'Item not found'});
            }

        });
    })

    .put(function(req, res){
        Items.findOne({'title': req.body.title}, function(err, itm){
            if(err)
                return res.send({message: 'Error has occurred'});
            if(itm){
                itm.title = req.body.newTitle;
                itm.text = req.body.text;
                itm.count = req.body.count;
                itm.cost = req.body.cost;
                itm.save(function(err, itm){
                    if(err)
                        res.send({message: 'Error has occurred'});
                    return res.send({message: 'Item updated successfully'});
                });
            }
            else{
                return res.send({message: 'Item not found'});
            }

        });
    });


module.exports = router;
