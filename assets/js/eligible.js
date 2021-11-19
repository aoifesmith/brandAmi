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
    "start": {
      "question": "Success sign in!. Please answer below questions:" + 'Q1/5: Are you over 18 years of age?',
      "answers": {
        "a": "Yes, I am over 18", 
        "b": "No, I am under 18"
      }
    },
    "1_a": {
      "question": 'Q2/5: How many IG followers do you have?',
      "answers": {
        "a": "5k+ IG followers", 
        "b": "0-5k IG followers"
      }
    },

    "1_b": {
      "question": 'Unfortunately you do not qualify for this application. YOu need to be over 18.',
    },


  };