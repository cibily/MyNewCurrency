/**
 * Keyboard Custom Binding - KonckoutJS
 * (http://knockoutjs.com/documentation/custom-bindings.html)
 * 
 * This binding is the glue between the keypad UI markup and the viewModel's
 * data observable.
 *
 */

ko.bindingHandlers.keypad = {
	init: function(element, valueAccessor, allBindings, viewModel) {
        
        // get the binding's value from element's text content
        var keyValue = $(element).text().toUpperCase();
        
        var isTouch = 'ontouchstart' in document.documentElement;
        var evt1 = isTouch ? 'touchstart' : 'mousedown';
        var evt2 = isTouch ? 'touchend' : 'mouseup';
        
        // pass keypad value to the viewModel's 
		element.addEventListener(evt2, function() {
            viewModel.key(keyValue);
		});
        
        // bind events for a visual feedback of the click action
        element.addEventListener(evt1, clickFeedbackAction);
        element.addEventListener(evt2, clickFeedbackAction);
        
        return false;
	}
};


function clickFeedbackAction(event) {
    var set = event.target.className.indexOf('active') === -1;
    ko.utils.toggleDomNodeCssClass(event.target, 'active', set);
}
