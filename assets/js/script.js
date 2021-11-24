// Function to handle the nav bar with responsive from W3CSchool
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_topnav

function navFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  // Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];


// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


// Functions to handle the validation of the user id and password in order to proceed or block and advise what is needed to proceed.
let userId = document.getElementById('userId');
let password = document.getElementById('password');
let form = document.getElementById('id-form');
let errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = [];
    if (userId.value === '' || userId.value == null) {
      messages.push('UserId is required. You must be a registered user to access this area!');
    }
     if (userId.value.length != 4) {
      messages.push('UserId is 4 digits only!');
    }
    if (isNaN(userId.value)) {
      messages.push('UserId must be digit!');
    }  
    if (password.value.length <= 6) {
      messages.push('Password must be longer than 6 characters!');
    }
  
    if (password.value.length >= 20) {
      messages.push('Password must be less than 20 characters!');
    }
  
    if (password.value === 'password') {
      messages.push("Password cannot be the word 'password'!");
    }
  
    if (messages.length > 0) {
      e.preventDefault();
      errorElement.innerHTML = messages.join('<br/>');
    }
  });

