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
let form = document.getElementById('appForm'); // get the element with matching ids
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

// function to generate answers from criteria
function populateForm(criteria) {
  var current_criteria = criteria_qs[criteria]; // take values from criteria_qs criteria
  var text = '';

  for (var prop in current_criteria['answers']) {
    if (current_criteria['answers'].hasOwnProperty(prop)) { //method returns boolean (true or false)indicating if the object has specified property adding answers to the criteria
      text += '<label><input type="radio" name="response" value="' + prop + '"/><span>' + current_criteria['answers'][prop] + '</span></label>';
    }
  }

  form.querySelector('p').innerHTML = current_criteria.question; //write questions to the p tag 
  form.querySelector('fieldset').innerHTML = text; //write answers to the fieldset 

}

populateForm('start');//set the form at the beginning