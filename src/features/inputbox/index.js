
var messageBus = require('message-bus');
var viewModel = require('./view-model');

exports.start = function() {
    
    // initialize values
    viewModel.dir('down');
    viewModel.inp(0);
    
    // receive values from keypad feature  
    messageBus.on('keypad:change', viewModel.inp);
    
    // stats UI bindings
    ko.applyBindings(viewModel, document.getElementById('inputbox'));  
    
};
