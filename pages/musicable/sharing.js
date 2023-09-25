

function overlayBackgroundOn() {
	document.querySelector('#overlayContainer').style.display = 'block';
  }
  
  function overlayOff() {
	document.querySelector('#overlayContainer').style.display = 'none';
  }
  
  function infoOverlayOn() {
	document.querySelector('#infoOverlay').style.display = 'flex';
	document.querySelector("#settingsOverlay").style['flex-flow'] = 'column';
	document.querySelector('#settingsOverlay').style.display = 'none';
	overlayBackgroundOn();
	}
  
  function settingsOverlayOn() {
	document.querySelector("#settingsOverlay").style.display = "flex";
	document.querySelector("#settingsOverlay").style['flex-flow'] = 'column';
	document.querySelector('#infoOverlay').style.display = 'none';
	overlayBackgroundOn();
	}
  
  const saveColorTheme = (color) => {
	localStorage.setItem('documentColorTheme', color)
  }
  
  function darkModeColorTheme() {
	// All dark mode theme methods here.
	saveColorTheme('dark');
	document.body.style['background-color'] = 'black';
	document.querySelector('#backgroundDecorationContainer').style.filter = 'invert(0)';
	document.getElementById('colorThemeIndicatorButton').textContent = 'Dark';

	document.querySelector('#toolBar').style['background-color'] = 'black';
	document.querySelector('#toolBar').style['border-color'] = 'yellow';
	const toolBarUtilityButtons = document.querySelector("#toolBar").querySelectorAll(".toolBarUtilityButton");
	for (i of toolBarUtilityButtons) {
		i.style.filter = "invert(0)";
	}

	let reviewImages = document.querySelectorAll(".reviewImage");
	for (let i = 0; i<reviewImages.length; i++) {
		reviewImages[i].style.filter = 'invert(0)';
	}
  }
  
  function lightModeColorTheme() {
  
	// All light mode theme methods here.
	saveColorTheme('light');
	document.body.style['background-color'] = 'white';
	document.querySelector('#backgroundDecorationContainer').style.filter = 'invert(1)';
	document.querySelector('#colorThemeIndicatorButton').textContent = 'Light';

	document.querySelector('#toolBar').style['background-color'] = 'white';
	document.querySelector('#toolBar').style['border-color'] = 'blue';

	const toolBarUtilityButtons = document.querySelector("#toolBar").querySelectorAll(".toolBarUtilityButton");
	for (i of toolBarUtilityButtons) {
		i.style.filter = "invert(1)";
	}

	let reviewImages = document.querySelectorAll(".reviewImage");
	for (let i = 0; i<reviewImages.length; i++) {
		reviewImages[i].style.filter = 'invert(1)';
	}
	console.log(reviewImages);
  }
  
  document.addEventListener('DOMContentLoaded', function initializeColorTheme() {
	var colorTheme = localStorage.getItem('documentColorTheme', localStorage.getItem('documentColorTheme'));
	if (colorTheme == null || colorTheme == undefined) {
	  darkModeColorTheme();
	} else if (colorTheme == 'light') {
	  lightModeColorTheme();
	} else if (colorTheme == 'dark') {
	  darkModeColorTheme();
	}
  });
  
  function colorThemeChange() {
	var colorTheme = localStorage.getItem('documentColorTheme');
	if (colorTheme == 'light') {
	  darkModeColorTheme();
	} else if (colorTheme == 'dark') {
	  lightModeColorTheme();
	}
  }