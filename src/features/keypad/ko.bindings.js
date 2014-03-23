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
        
        // pass keypad value to the viewModel's 
		element.addEventListener('touchend', function() {
            viewModel.key(keyValue);
		});
        
        // bind events for a visual feedback of the click action
        element.addEventListener('touchstart', clickFeedbackAction);
        element.addEventListener('touchend', clickFeedbackAction);   
	}
};


function clickFeedbackAction(event) {
    var set = event.target.className.indexOf('active') === -1;
    ko.utils.toggleDomNodeCssClass(event.target, 'active', set);
}
