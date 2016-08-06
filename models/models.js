var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
    title: String,
    text: String,
    count: Number,
    textbox: Number,
    list: Number,
    listItems: [{item: String}]
});

var backupSchema = new mongoose.Schema({
    title: String,
    text: String,
    count: Number,
    textbox: Number,
    list: Number,
    listItems: [{from: String,
        to: String}]
});

var avSchema = new mongoose.Schema({
    title: String,
    text: String,
    count: Number
});

var paymentSchema = new mongoose.Schema({
    title: String,
    text: String,
    count: Number
});

var itemSchema = new mongoose.Schema({
    title: String,
    text: String,
    count: Number,
    cost: String
});

mongoose.model("tasks", taskSchema);
mongoose.model("backup", backupSchema);
mongoose.model("antivirus", avSchema);
mongoose.model("payment", paymentSchema);
mongoose.model("items", itemSchema);