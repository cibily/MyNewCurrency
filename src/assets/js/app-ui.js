
// Show status bar iPhone only for full screen mode
function onDeviceReady() {
    if (parseFloat(window.device.version) >= 7.0) {
        document.body.style.marginTop = "20px";
    }
}
document.addEventListener('deviceready', onDeviceReady, false);

// Prevent page scroll on touch device 
document.ontouchmove = function(e){ e.preventDefault(); }
