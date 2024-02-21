The script allows you to claim Faucet from the XeggeX exchange
It automatically executes the function every 05 minutes.

We use the developer mode of the Firefox browser

Open the XeggeX Faucet page : https://xeggex.com/faucet

To use developer mode in Firefox: Menu ➤ Additional tools ➤ Web development tools
or "CTRL"+"SHIFT"+"I"

Console tab

Paste the script


### Pour spécifier le langage :
Vous pouvez spécifier le langage après le premier triple backtick pour obtenir une coloration syntaxique appropriée. Par exemple :
```markdown
```javascript
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
greet();


Click and run

![Description de l'image](https://github.com/WassabiFR/XEGGEX-Faucet-Auto-Claim-/blob/main/Xeggex-Claim.jpg)

https://github.com/WassabiFR/XEGGEX-Faucet-Auto-Claim-/blob/main/Xeggex-Claim.jpg
