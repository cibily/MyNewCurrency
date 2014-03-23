
var messageBus = require('message-bus');
var viewModel = require('./view-model');

exports.start = function() {
    
    ko.applyBindings(viewModel, document.getElementById('inputbox'));  
    
    // receive values from keypad feature
    messageBus.on('keypad:change', function(val) {
        console.log('keypad value');
        viewModel.inp(val);
    });
    
    
//    messageBus.on('keypad:change', viewModel.inp);
    
};

exports.vm = viewModel;
