## Description

The script allows you to claim Faucet from the XeggeX exchange It automatically executes the function every 05 minutes.

## Installation

1. Open the XeggeX Faucet page : https://xeggex.com/faucet
2. Click on Faucet
3. To use developer mode in Firefox: Menu ➤ Additional tools ➤ Web development tools or "CTRL"+"SHIFT"+"I"
4. Open Console tab
5. Paste the script
6. Click and run

## JavaScript Code

Paste the script on Console tab :

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
```
## Image
![Description de l'image](https://github.com/WassabiFR/XEGGEX-Faucet-Auto-Claim-/blob/main/Xeggex-Claim.jpg)

