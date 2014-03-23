
var change = 0.11;

function VM() {
    
    this.inp = ko.observable();
    this.dir = ko.observable('down');
    
    
    
    this.v1 = ko.computed(function() {
        if (this.dir() === 'down') {
            return this.inp();
        } else {
            if (!this.inp()) {
                return 0;
            } else {
                return Math.round(this.inp() / change * 100) / 100;
            }
        }
    }, this);
    
    this.v2 = ko.computed(function() {
        if (this.dir() === 'up') {
            return this.inp();
        } else {
            if (!this.inp()) {
                return 0;
            } else {
                return Math.round(this.inp() * change * 100) / 100;
            }
        }
    }, this);
    
}

module.exports = new VM();