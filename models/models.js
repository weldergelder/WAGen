var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
    taskID: String,
    title: String,
    text: String,
    count: Number,
    textbox: Number,
    list: Number,
    listItems: [{item: String}]
});

var backupSchema = new mongoose.Schema({
    backupID: String,
    title: String,
    text: String,
    count: Number,
    textbox: Number,
    list: Number,
    listItems: [{from: String,
        to: String}]
});

var avSchema = new mongoose.Schema({
    avID: String,
    title: String,
    text: String,
    count: Number
});

var paymentSchema = new mongoose.Schema({
    paymentID: String,
    title: String,
    text: String,
    count: Number
});

var itemSchema = new mongoose.Schema({
    itemID: String,
    title: String,
    text: String,
    count: Number,
    cost: String
});