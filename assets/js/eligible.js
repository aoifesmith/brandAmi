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

var criteria = 0; // keeps criteria from being undefined 
var form = document.getElementById('appForm'); // get the element with matching ids
var submit = document.getElementById('continueButton');
var reset = document.getElementById('resetButton');
var response = '';

var criteria_qs = {
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

  "2_a": {
    "question": "Q3/5: How many TikTok followers do you have?",
    "answers": {
      "a": "20k+ Followers",
      "b": "0-20k Followers"
    }
  },
  "3_a": {
    "question": "Q4/5: Are you resident in Ireland?",
    "answers": {
      "a": "Yes",
      "b": "No"
    }
  },
  "4_a": {
    "question": "Q5/5: Would you sell your soul to the devil?",
    "answers": {
      "a": "Of course I would!",
      "b": "No"
    }
  },

  "5_a": {
    "question": "Nice work. You've been approved!! We will be in contact with contracts within 5 working days."
  },

  "1_b": {
    "question": "Unfortunately you do not qualify for this application. You need to be over 18.",
  },
  "2_b": {
    "question": "Unfortunately you need to have over 5k IG followers to meet eligibility requirements.",
  },
  "3_b": {
    "question": "Unfortunately you need to have over 20k TikTok followers to meet eligibility requirements.",
  },
  "4_b": {
    "question": "Unfortunately you need to be a resident of Ireland to apply.",
  },
  "5_b": {
    "question": "Unfortunately you need to sell your soul to the devil for this kind of work. Change your ways and come over to the dark side. We'll make it worth your while. Sure we promise don't we!!!",
  },
};

// Continue link
submit.addEventListener('mouseup', function () { //when a button on a pointing device is released while the pointer is located inside it
  response = form.querySelectorAll('input[type=radio]:checked')[0].value; //a list of the document's elements that match the specified group of selectors.
  if (response) {
    criteria++; //increment or add 1 to
    populateForm(criteria + '_' + response); //if a radio is checked populate form with the response
    console.log("Application Worked!"); // Console log to make sure things are working
  }
});

// Reset button - The reset() method resets the values of all elements in the form
function resetForm() {
  document.getElementById("appForm").reset();
}

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

populateForm('start'); //set the form at the beginning