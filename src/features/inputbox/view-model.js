
var num2str = require('./num2str');

var change = 0.11;

function VM() {
    
    this.inp = ko.observable();
    this.dir = ko.observable();
    
    this.v1 = ko.computed(function() {
        if (this.dir() === 'down') {
            return num2str(this.inp());
        } else {
            if (!this.inp()) {
                return num2str(0);
            } else {
                return num2str(this.inp() / change);
            }
        }
    }, this);
    
    this.v2 = ko.computed(function() {
        if (this.dir() === 'up') {
            return num2str(this.inp());
        } else {
            if (!this.inp()) {
                return num2str(0);
            } else {
                return num2str(this.inp() * change);
            }
        }
    }, this);
    
    this.setDirDown = function() {
        this.dir('down');
    };
    
    this.setDirUp = function() {
        this.dir('up');
    };
    
}

module.exports = new VM();