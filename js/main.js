
if(window.innerWidth < 769) {
// make those pads pop //
function playSound(e) {
  let code;
  if (e.keyCode) {
    // it was a keypress, get the keycode as usual
    code = e.keyCode;
  } else {
    // it was a click.  Read the keycode from the div that was clicked
    code = this.dataset.key;
  }

  const audio = document.querySelector(`audio[data-key="${code}"]`);
    const key = document.querySelector(`.key[data-key="${code}"]`);

    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  }


function removeTransition(e) {

    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key')
for (let i=0, key; key = keys[i]; i++) {
  key.addEventListener('transitionend', removeTransition);
  key.addEventListener('click', playSound);
}

} else {
  // make those pads pop //
function playSound(e) {


  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}


function removeTransition(e) {

    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
}

// Get modal element //

var modal = document.getElementById('simpleModal');
// Get open modal button //
var modalBtn = document.getElementById('modalBtn');
// Get close button //
// listen for click //
modalBtn.addEventListener('click', openModal);
// outside click listener //
window.addEventListener('click', outsideClick);
// function open modal //
function openModal() {
  modal.style.display = 'block';
}
// function to close that piece //

function outsideClick(e) {
  if(e.target == modal) {
  modal.style.display = 'none';
}
}


// var keyClick = document.querySelector('key');
// keyClick.addEventListener('onclick', playSound);
