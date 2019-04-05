// DOM Elements
const NEW_GOAL_BUTTON = document.querySelector('#newGoal');
const OVERLAY_ELEMENT = document.querySelector('#overlay');
const POPUP_ELEMENT = document.querySelector('#popup');
const NAME_ELEMENT = document.querySelector('#name');
const VALUE_ELEMENT = document.querySelector('#value');
const SAVE_GOAL_BUTTON = document.querySelector('#saveGoal');
const RESET_ALL_BUTTON = document.querySelector('#resetAll');

// Global Variables
let GOALS;
if (!("Goals" in localStorage)) {
    GOALS = {};
} else {
  GOALS = localStorage.getItem("Goals");
  console.log(GOALS);
}

// New Goal Constructor
function Goal(name, value) {
    this.name = name;
    this.value = value;
}

// Event Listener for "Create New Goal" button
NEW_GOAL_BUTTON.addEventListener("click", function() {
    OVERLAY_ELEMENT.style.display = "block";
    POPUP_ELEMENT.style.display = "block";
}, false);

// Event Listener for closing popup by clicking on dark popup background
OVERLAY_ELEMENT.addEventListener("click", function() {
    OVERLAY_ELEMENT.style.display = "none";
    POPUP_ELEMENT.style.display = "none";
}, false);

// Event listener for "Save" Goal button
SAVE_GOAL_BUTTON.addEventListener("click", function() {
    if (NAME_ELEMENT.value) {
        let newGoal = new Goal(NAME_ELEMENT.value, VALUE_ELEMENT.value);
        GOALS.push(JSON.stringify(newGoal));
        localStorage.setItem("Goals", GOALS);
    } else {
        console.log("Error: Please fill in name of your Goal");
    }
}, false);

