function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24* 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

var cookie = getCookie("loggedIn");
if (cookie === "true") {
  window.location.replace("/");
}

const submitButton = document.querySelector('#login-submit');
const passField = document.querySelector('#pass-text');
const errorMessage = document.querySelector('#pass-error');

function checkPass () {
  pass = passField.value;
  passField.value = "";
  hideError();
  if (pass != 'dreyfus on whetstone') {
    displayError();
  } else {
    setCookie("loggedIn", "true", 7);
    window.location.replace("/");
  }
}

function hideError() {
  errorMessage.style.display = 'none';
}

function displayError() {
  errorMessage.style.display = 'block';
}

submitButton.addEventListener('click', checkPass)

document.getElementById("login-form").onkeypress = function(e) {
  var key = e.charCode || e.keyCode || 0;     
  if (key == 13) {
    e.preventDefault();
    checkPass();
  }
}
