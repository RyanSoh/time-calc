document.getElementById("calculator-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const registrationNumber = parseInt(document.getElementById("registration-number").value);
  const add48 = document.getElementById("add-48").checked;

  if (isNaN(registrationNumber)) {
    document.getElementById("result").innerText = "Please enter a valid number.";
    return;
  }

  let time = (registrationNumber - 1) * 37;

  // Add 48 if the checkbox is checked
  if (add48) {
    time += 48;
  }

  time %= 96;

  let hours = Math.floor(time / 4);
  let minutes = "";
  if (time % 4 === 1) {
    minutes = "15";
  } else if (time % 4 === 2) {
    minutes = "30";
  } else if (time % 4 === 3) {
    minutes = "45";
  } else {
    minutes = "00";
  }

  document.getElementById("result").innerText = `Calculated Time: ${hours}:${minutes}`;
});
