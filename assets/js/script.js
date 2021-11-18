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