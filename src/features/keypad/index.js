

require('./ko.bindings');

exports.start = function() {
    
    var viewModel = require('./ko.view-model');
    
    var element = document.getElementById('keypad');
    
    ko.applyBindings(viewModel, element);
    
};
