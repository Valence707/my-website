var songs = [
  [
    "Imagine Dragons - Believer",
    0,
    []
  ],
  [
    "Electric Guest - Troubleman",
    1,
    []
  ],
  [
    "The Heavy - Short Change Hero",
    2,
    []
  ]
]

var currentSongIndex = 0;

var comments = songs[currentSongIndex][2];

const setCurrentPlayingSong = () => {
  localStorage.setItem("currentSongIndex", currentSongIndex);
}

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
  document.querySelector('#musicableTitle').style.color = 'yellow';
  document.body.style['background-color'] = 'black';
  document.querySelector('#colorThemeIndicatorButton').textContent = 'Dark';
  document.querySelector('#backgroundDecorationContainer').style.filter = 'invert(0)';
  document.querySelector("#musicableTitle").style.filter = 'invert(0)';
  
  const titleButtonText = document.querySelector('#titleButtonContainer').querySelectorAll('h1,p');
  for (let i = 0; i < titleButtonText.length; i++) {
    titleButtonText[i].style.color = 'white';
  }

  const titleButtonImages = document.querySelector('#titleButtonContainer').querySelectorAll('img');
  for (let i = 0; i < titleButtonImages.length; i++) {
    titleButtonImages[i].style.filter = 'invert(0)';
  }

  document.querySelector('#toolBar').style['background-color'] = 'black';
  document.querySelector('#toolBar').style['border-color'] = 'yellow';
  const titleBarImages = document.querySelector("#titleBar").querySelectorAll("img");
  for (let i of titleBarImages) {
    i.style.filter = "invert(0)";
  }
  const toolBarUtilityButtons = document.querySelector("#toolBar").querySelectorAll(".toolBarUtilityButton");
  for (i of toolBarUtilityButtons) {
    i.style.filter = "invert(0)";
  }
}

function lightModeColorTheme() {

  // All light mode theme methods here.
  saveColorTheme('light');
  document.querySelector('#musicableTitle').style.color = 'blue';
  document.body.style['background-color'] = 'white';
  document.querySelector('#colorThemeIndicatorButton').textContent = 'Light';
  document.querySelector('#backgroundDecorationContainer').style.filter = 'invert(1)';
  const titleButtonText = document.querySelector('#titleButtonContainer').querySelectorAll('h1,p');
  for (let i = 0; i < titleButtonText.length; i++) {
    titleButtonText[i].style.color = 'black';
  }

  const titleButtonImages = document.querySelector('#titleButtonContainer').querySelectorAll('img');
  for (let i = 0; i < titleButtonImages.length; i++) {
    titleButtonImages[i].style.filter = 'invert(1)';
  }
  
  const titleBarImages = document.querySelector("#titleBar").querySelectorAll('img');
  for (let i of titleBarImages) {
    i.style.filter = "invert(1)";
  }

  document.querySelector("#musicableTitle").style.color = 'blue';

  document.querySelector('#toolBar').style['background-color'] = 'white';
  document.querySelector('#toolBar').style['border-color'] = 'blue';
  const toolBarUtilityButtons = document.querySelector("#toolBar").querySelectorAll(".toolBarUtilityButton");
  for (i of toolBarUtilityButtons) {
    i.style.filter = "invert(1)";
  }
}

function colorThemeChange() {
  var colorTheme = localStorage.getItem('documentColorTheme');
  if (colorTheme == 'light') {
    darkModeColorTheme();
  } else if (colorTheme == 'dark') {
    lightModeColorTheme();
  }
}

function updateComments(inputType) {
  if (inputType.key == "Enter") {
    let userComment = document.querySelector("#userComment").value;
    if (userComment != '' && userComment.trim() != '') {
      document.querySelector("#commentDisplay").removeAttribute('readonly');
      songs[currentSongIndex][2] += "USER: "+userComment+"\n";
      document.querySelector("#userComment").value = '';
      document.querySelector("#commentDisplay").textContent = songs[currentSongIndex][2];
      document.querySelector("#commentDisplay").setAttribute('readonly', true);
      console.log(document.querySelector("#commentDisplay").attributes);
      inputType.preventDefault();
      
    } else {
      document.querySelector("#userComment").value = '';
      inputType.preventDefault();
    }
  }
}

function setSong(element) {
  currentSongIndex = parseInt(currentSongIndex);
  try {
    if (element.id == 'forwardButton' && (currentSongIndex+1 < songs.length)) {
      currentSongIndex += 1;
      localStorage.setItem('currentSongIndex', currentSongIndex);
    } else if (element.id == 'backButton' && (currentSongIndex-1 >= 0)) {
      currentSongIndex -= 1;
      localStorage.setItem('currentSongIndex', currentSongIndex);
    } else if (element >= 0 && element < songs.length) {
      console.log("PAGE LOAD");
    } else {
      console.log("FAIL");
      console.log(element)
    }
  } catch (TypeError) {
    console.log("CONTENT LOAD");
  }

  document.querySelector("#commentDisplay").textContent = songs[currentSongIndex][2];
  document.querySelector("#songTitle").innerHTML = songs[currentSongIndex][0];
  document.querySelector("#songSource").pause();
  document.querySelector("#songSource").setAttribute('src', "musicplayer/songs/"+songs[currentSongIndex][0]+"/"+songs[currentSongIndex][0]+".mp3");
  document.querySelector("#songSource").load();
  document.querySelector("#songArt").src = "musicplayer/songs/"+songs[currentSongIndex][0]+"/"+songs[currentSongIndex][0]+".png";
  document.querySelector("#heartCounterDisplay").innerHTML = songs[currentSongIndex][1];
}

function increaseLikes() {
  songs[currentSongIndex][1] += 1;
  document.querySelector("#heartCounterDisplay").innerHTML = songs[currentSongIndex][1];
}

document.addEventListener('DOMContentLoaded', function initializeColorTheme() {
  let colorTheme = localStorage.getItem('documentColorTheme');
  if (colorTheme == null || colorTheme == undefined) {
    darkModeColorTheme();
  } else if (colorTheme == 'light') {
    lightModeColorTheme();
  } else if (colorTheme == 'dark') {
    darkModeColorTheme();
  }
  
  if (localStorage.getItem('currentSongIndex') != undefined && localStorage.getItem('currentSongIndex') != null) {
    currentSongIndex = localStorage.getItem('currentSongIndex');
  } else {
    localStorage.setItem('currentSongIndex', currentSongIndex);
  }

  setSong(songs[currentSongIndex][0]);

  for (let n = 0; n < songs.length; n++) {
    if (localStorage.getItem('song'+n+'Comments') != undefined) {
      songs[n][2] = localStorage.getItem('song'+n+'Comments');
    } else {

    }

  }
});