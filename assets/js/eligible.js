// Function to handle the nav bar with responsive from W3CSchool
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_topnav

function navFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  let criteria = 0; // keeps criteria from being undefined 
  let form = document.getElementById('appForm');// get the element with matching ids
  let submit = document.getElementById('continueButton');
  let reset = document.getElementById('resetButton');
  let response = '';

  let criteria_qs = {

  };