"use strict";
var mongoose = require('mongoose');
var EconomySchema = new mongoose.Schema({
    Guild: String,
    User: String,
    Wallet: Number,
    Bank: Number
});
module.exports = mongoose.model('economy', EconomySchema);
