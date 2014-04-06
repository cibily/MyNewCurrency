/**
 * Keypad's ViewModel
 * ==================
 *
 * This the core of a KnockoutJS module as long as we try to squeeze here
 * all the business logic tied to the data management
 */

module.exports = Object.create({});
module.exports.key = ko.observable();
module.exports.key.extend({ notify: 'always' });



/**
 * Listen to the key value to queque a number and spread it to the world.
 */
var inputStr = '';
module.exports.key.subscribe(function(val) {
//    console.log('vm keypress', val);
    switch (val) {
        case '=':
            notify('submit');
            break;
        case 'I':
            notify('info');
            break;
        case 'C':
            inputStr = '';
            notify('change');
            break;
        case ',':
        case '.':
            if (inputStr.indexOf('.') === -1) {
                inputStr += '.';
            }
            break;
        default:
            inputStr += val;
            notify('change');
    }
});


/**
 * Notification Abstraction
 */

var messageBus = require('message-bus');

function notify(channel) {
    messageBus.emit('keypad:' + channel, inputStr);
}
