function activateButtons() {
  var buttons = document.querySelectorAll(".btn.btn-sm.btn-success.makeclaim");
  buttons.forEach(function(button) {
    button.click();
  });
}

function activateScript() {
  activateButtons();
}

// Runs the function every 05 minutes
setInterval(activateScript, 5 * 60 * 1000);
