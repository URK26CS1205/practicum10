// Sub-Practicum 10: DOM Manipulation

// 1. Change message using querySelector()
function changeMessage() {
    document.querySelector("#dom-message").textContent =
        "Welcome to ToyNest! Learning through play is fun!";
}

// 2. Change element background color
function changeColor() {
    document.querySelector("#dom-message").style.backgroundColor =
        "#ffedcc";
}

// 3. Dynamically create and add new DOM elements
function addToy() {
    let newToy = document.createElement("p");

    newToy.textContent = "New Toy Added!";
    newToy.className = "toy-item";

    document.querySelector("#toy-container").appendChild(newToy);
}

// 4. Interactive form element
function displayToy() {
    let toy = document.querySelector("#toy-name").value;

    if (toy.trim() === "") {
        document.querySelector("#toy-result").textContent =
            "Please enter a toy name!";
    } else {
        document.querySelector("#toy-result").textContent =
            "Your favourite toy is: " + toy;
    }
}

// 5. setTimeout()
let timeoutID;

function startTimeout() {
    clearTimeout(timeoutID);

    document.querySelector("#timer-message").textContent =
        "Your message will appear in 3 seconds...";

    timeoutID = setTimeout(function () {
        document.querySelector("#timer-message").textContent =
            "Time is up! Keep Playing!";
        timeoutID = null;
    }, 3000);
}

// 6. clearTimeout()
function cancelTimeout() {
    clearTimeout(timeoutID);
    timeoutID = null;

    document.querySelector("#timer-message").textContent =
        "Timeout cancelled!";
}

// 7. setInterval()
let intervalID = null;
let count = 0;

function startInterval() {
    if (intervalID !== null) {
        return;
    }

    intervalID = setInterval(function () {
        count++;

        document.querySelector("#counter").textContent =
            "Counter: " + count;
    }, 1000);
}

// 8. clearInterval()
function stopInterval() {
    clearInterval(intervalID);
    intervalID = null;
}