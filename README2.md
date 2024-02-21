## Description

The script allows you to claim Faucet from the XeggeX exchange It automatically executes the function every 05 minutes.

## Installation

1. Open the XeggeX Faucet page : https://xeggex.com/faucet
2. To use developer mode in Firefox: Menu ➤ Additional tools ➤ Web development tools or "CTRL"+"SHIFT"+"I"
3. Open Console tab
4. Paste the script
5. Click and run

## Image
![Description de l'image](https://github.com/WassabiFR/XEGGEX-Faucet-Auto-Claim-/blob/main/Xeggex-Claim.jpg)

## JavaScript Code

Voici le code JavaScript utilisé dans ce projet :

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



# Mon Projet

Bienvenue dans mon projet ! Ceci est un projet démonstratif pour illustrer l'utilisation de Markdown sur GitHub.

## Description

Ce projet contient du code JavaScript qui affiche "Hello, World!" dans la console du navigateur.

## Installation

1. Clonez ce repository sur votre machine.
2. Ouvrez le fichier `index.html` dans votre navigateur web.

## Code JavaScript

Voici le code JavaScript utilisé dans ce projet :

```javascript
function greet() {
    console.log("Hello, World!");
}

greet();
```
