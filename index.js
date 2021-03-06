/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function displayMessage(msg) {
  const greeting = document.getElementById("greeting")
  greeting.innerText = msg;
}
  

function greet(time) {
  const hour = Number(time.split("\:")[0]);

  if (hour < 12) {
    return "Good Morning"
  } else if (hour >= 17) {
    return"Good Evening"
  } else {
    return "Good Afternoon"
  }
}