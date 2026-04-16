const userData = {
  name: "",
  age: 0,
  condition: "",
  details: ""
};

const form = document.getElementById("consultForm");

form.addEventListener("submit", function(event) {


  const age = document.getElementById("age").value;

  if (age < 0) {
    event.preventDefault();
    alert("Please enter a valid age.");
    return;
  }

  userData.name = document.getElementById("name").value;
  userData.age = document.getElementById("age").value;
  userData.condition = document.getElementById("condition").value;
  userData.details = document.getElementById("details").value;

  const logs = JSON.parse(localStorage.getItem("consultations")) || [];
  logs.push(userData);

  localStorage.setItem("consultations", JSON.stringify(logs));

  localStorage.setItem("username", userData.name);

  console.log(`New consultation submitted by ${userData.name}`);
});